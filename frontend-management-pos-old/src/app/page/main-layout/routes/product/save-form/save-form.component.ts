import {Component, inject, input, model, OnInit, output, signal, ViewEncapsulation} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {FloatLabel} from "primeng/floatlabel";
import {CategoryService} from "../../../../service/category.service";
import {AuthorService} from "../../../../service/author.service";
import {FileUpload} from "primeng/fileupload";
import {AuthorResponse} from "../../../../model/response/author-response.model";
import {CategoryResponse} from "../../../../model/response/category-response.model";
import {UploadImageService} from "../../../../service/upload-image.service";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {ProductService} from "../../../../service/product.service";
import {Toast} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ImageResponse} from "../../../../model/response/image-response.model";
import {Textarea} from "primeng/textarea";
import {Select} from "primeng/select";
import {InputNumber} from "primeng/inputnumber";
import {MultiSelect} from "primeng/multiselect";
import {ProductCreatedRequest} from "../../../../model/request/product-created-request.model";

@Component({
    selector: 'app-save-form',
    imports: [
        Button,
        FormsModule,
        Textarea,
        Dialog,
        FloatLabel,
        Select,
        FileUpload,
        Toast,
        ReactiveFormsModule,
        InputText,
        InputNumber,
        MultiSelect
    ],
    templateUrl: './save-form.component.html',
    styleUrl: './save-form.component.css',
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})
export class SaveFormComponent implements OnInit {
    ngOnInit(): void {
        this.fetchAuthors();
        this.fetchCategories();
        this.getListYears();
        this.saveForm = this.fb.group({
            name: [null, [Validators.required]],
            imgFile: null,
            publisher: null,
            translator: null,
            authors: [null, [Validators.required]],
            categories: [null, [Validators.required]],
            quantity: [null, [Validators.required, Validators.min(0), Validators.pattern('^[1-9]\\d*$')]],
            price: [null, [Validators.required, Validators.min(1)]],
            numOfPages: [null, [Validators.min(1), Validators.pattern('^[1-9]\\d*$')]],
            publishedYear: null,
            description: null,
        });
        this.categoryInput = this.fb.group({
            name: ['', Validators.required]
        });
        this.authorInput = this.fb.group({
            name: ['', Validators.required]
        });
    }

    saveForm!: FormGroup;
    categoryInput!: FormGroup;
    authorInput!: FormGroup;
    years = signal<number[]>([]);
    submitted = signal(false);
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    private authorService = inject(AuthorService);
    visible = model(false);
    categoryVisible = signal(false);
    authorVisible = signal(false);
    authors = signal<AuthorResponse[]>([]);
    categories = signal<CategoryResponse[]>([]);
    onSave = output<any>();
    message = output<{}>();
    productStatus = input.required<boolean>();


    fetchAuthors() {
        this.authorService.fetchAuthors().subscribe({
            next: res => {
                this.authors.set(res.data);
            }
        });
    }

    fetchCategories() {
        this.categoryService.fetchCategories().subscribe({
            next: res => {
                this.categories.set(res.data);
            }
        });
    }

    closeDialog() {
        this.visible.set(false);
        this.saveForm.reset();
        this.saveForm.patchValue({isActive: true});
    }

    chooseImage(event: any) {
        const file = event.files[0];
        this.saveForm.patchValue({imgFile: file});
    }

    removeImage() {
        this.saveForm.patchValue({imgFile: null});
    }
    async saveBook() {
        this.submitted.set(true);
        if (this.saveForm.valid) {
            let fileReq: File | null = this.saveForm.controls['imgFile'].value;
            let bookReq: ProductCreatedRequest = {
                name: this.saveForm.controls['name'].value!,
                quantity: this.saveForm.controls['quantity'].value!,
                price: this.saveForm.controls['price'].value!,
                publisher: this.saveForm.controls['publisher'].value,
                translator: this.saveForm.controls['translator'].value,
                numOfPages: this.saveForm.controls['numOfPages'].value,
                publishedYear: this.saveForm.controls['publishedYear'].value,
                description: this.saveForm.controls['description'].value,
                authorIds: this.saveForm.controls['authors'].value!,
                categoryIds: this.saveForm.controls['categories'].value!
            };
            await firstValueFrom(this.productService.saveProduct(bookReq, fileReq));
            await firstValueFrom(this.productService.searchProducts({
                page: 1,
                size: 10,
                sortBy: "name",
                nameOrCodeKeyword: "",
                isActive: this.productStatus()
            }))
                .then(res => {
                    this.onSave.emit(res.data);
                    this.message.emit(
                        {
                            severity: "success",
                            summary: "Thành công",
                            detail: "Thêm sản phẩm mới thành công!!!"
                        }
                    );
                });
            this.saveForm.reset();
            this.saveForm.patchValue({isActive: true});
            this.submitted.set(true);
            this.visible.set(false);
        } else {
            this.messageService.add({
                severity: "error",
                summary: "Lỗi",
                detail: "Dữ liệu nhập vào không đúng yêu cầu, hãy nhập lại!!!"
            });
            this.visible.set(false);
        }
    }


    saveCategoryForm() {
        this.categoryVisible.set(true);
    }

    saveCategory(input: any) {
        console.log(input);
        this.categoryService.postCategories(input.name).subscribe({
            next: res => {
                console.log("Save category success");
                this.fetchCategories();
                this.categoryVisible.set(false);
            },
            error: err => {
                console.log(err);
            }
        });
    }

    saveAuthorForm() {
        this.authorVisible.set(true);
    }

    saveAuthor(input: any) {
        let name = input.name;
        this.authorService.postAuthors(name).subscribe({
            next: res => {
                console.log("Save author success");
                this.fetchAuthors();
                this.authorVisible.set(false);
            }
        });
    }

    getListYears() {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        for (let year = currentYear; year >= startYear; year--) {
            this.years.update(item => [...item, year]);
        }
    }
}
