import {Component, inject, input, model, OnInit, output, ViewEncapsulation} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../../../service/product.service";
import {CategoryService} from "../../../../service/category.service";
import {AuthorService} from "../../../../service/author.service";
import {UploadImageService} from "../../../../service/upload-image.service";
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {ProductResponse} from "../../../../model/response/product-response.model";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {AuthorResponse} from "../../../../model/response/author-response.model";
import {CategoryResponse} from "../../../../model/response/category-response.model";
import {FileUpload} from "primeng/fileupload";
import {Image} from "primeng/image";
import {firstValueFrom} from "rxjs";
import {ProductUpdatedRequest} from "../../../../model/request/product-updated-request.model";
import {PageResponse} from "../../../../model/response/page-response.model";
import {Select} from "primeng/select";
import {Toast} from "primeng/toast";
import {InputNumber} from "primeng/inputnumber";
import {MultiSelect} from "primeng/multiselect";
import {AppConstants} from "../../../../../app.constants";

@Component({
    selector: 'app-update-form',
    imports: [
        ReactiveFormsModule,
        Button,
        Dialog,
        Select,
        FloatLabel,
        FileUpload,
        Image,
        InputText,
        Toast,
        InputNumber,
        MultiSelect
    ],
    templateUrl: './update-form.component.html',
    styleUrl: './update-form.component.css',
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})


export class UpdateFormComponent implements OnInit {

    ngOnInit() {
        this.findProductById();
        this.fetchAuthors();
        this.fetchCategories();
        this.getListYears();
        this.updateForm = this.fb.group({
            name: this.fb.control<string | null>(null, [Validators.required]),
            imgFile: null,
            publisher: this.fb.control<string | null>(null),
            translator: this.fb.control<string | null>(null),
            authors: this.fb.control<number | null>(null, [Validators.required]),
            categories: this.fb.control<number | null>(null, [Validators.required]),
            quantity: [0, [Validators.required, Validators.min(0), Validators.pattern('^[1-9]\\d*$')]],
            price: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
            numOfPages: this.fb.control<number | null>(null, [Validators.min(1), Validators.pattern('^[1-9]\\d*$')]),
            publishedYear: this.fb.control<number | null>(null),
            description: this.fb.control<string | null>(null)
        });
        this.categoryInput = this.fb.group({
            name: ['', Validators.required]
        });
        this.authorInput = this.fb.group({
            name: ['', Validators.required]
        });
    }

    updateForm!: FormGroup;
    categoryInput!: FormGroup;
    authorInput!: FormGroup;
    private defaultData!: ProductResponse;
    imageUrl!: string;
    publicId!: string | null;
    years: number[] = [];
    submitted = false;
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    private uploadImageService = inject(UploadImageService);
    private authorService = inject(AuthorService);
    authors: AuthorResponse[] = [];
    categories: CategoryResponse[] = [];
    categoryVisible = false;
    authorVisible = false;
    visible = model(false);
    message = output<{}>();
    productStatus = input.required<boolean>();
    onUpdate = output<PageResponse<ProductResponse>>();
    updateId = input<number>();

    async updateBook() {
        this.submitted = true;
        if (this.updateForm.valid) {
            let fileReq: File | null = this.updateForm.controls['imgFile'].value;
            let bookReq: ProductUpdatedRequest = {
                name: this.updateForm.controls['name'].value!,
                quantity: this.updateForm.controls['quantity'].value!,
                price: this.updateForm.controls['price'].value!,
                publisher: this.updateForm.controls['publisher'].value,
                translator: this.updateForm.controls['translator'].value,
                numOfPages: this.updateForm.controls['numOfPages'].value,
                publishedYear: this.updateForm.controls['publishedYear'].value,
                description: this.updateForm.controls['description'].value,
                authorIds: this.updateForm.controls['authors'].value!,
                categoryIds: this.updateForm.controls['categories'].value!
            };
            await firstValueFrom(this.productService.updateProduct(this.updateId()!, bookReq, fileReq));
            await firstValueFrom(this.productService.searchProducts({
                page: 1,
                size: 10,
                sortBy: "name",
                nameOrCodeKeyword: "",
                isActive: this.productStatus()
            }))
                .then(res => {
                    this.onUpdate.emit(res.data);
                    this.message.emit(
                        {
                            severity: "success",
                            summary: "Thành công",
                            detail: "Cập nhật sản phẩm thành công!!!"
                        }
                    );
                });

            this.submitted = false;
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

    chooseImage(event: any) {
        const file = event.files[0];
        this.updateForm.patchValue({imgFile: file});
    }

    removeImage() {
        this.updateForm.patchValue({imgFile: null});
    }

    findProductById() {
        const id: number = this.updateId()!;
        this.productService.findProductById(id).subscribe({
            next: res => {
                let authorIds: number[] = res.data.authors.map(author => author.id);
                let categoryIds: number[] = res.data.categories.map(category => category.id);
                this.updateForm.patchValue({
                    name: res.data.name,
                    imgFile: null,
                    publisher: res.data.publisher,
                    translator: res.data.translator,
                    authors: authorIds,
                    categories: categoryIds,
                    quantity: res.data.quantity,
                    price: res.data.price,
                    numOfPages: res.data.numOfPages,
                    publishedYear: res.data?.publishedYear,
                    description: res.data.description,
                });
                this.imageUrl = res.data.imgUrl || AppConstants.BASE_IMAGE;
                this.publicId = res.data.publicId;
                this.defaultData = res.data;
            }
        });

    }

    fetchAuthors() {
        this.authorService.fetchAuthors().subscribe({
            next: res => {
                this.authors = res.data;
            }
        });
    }

    fetchCategories() {
        this.categoryService.fetchCategories().subscribe({
            next: res => {
                this.categories = res.data;
            }
        });
    }

    saveCategoryForm() {
        this.categoryVisible = true;
    }

    saveCategory(input: any) {
        console.log(input);
        this.categoryService.postCategories(input.name).subscribe({
            next: res => {
                console.log(res);
                console.log("Save category success");
                this.fetchCategories();
                this.categoryVisible = false;
            },
            error: err => {
                console.log(err);
            }
        });
    }

    saveAuthorForm() {
        this.authorVisible = true;
    }

    saveAuthor(input: any) {
        let name = input.name;
        this.authorService.postAuthors(name).subscribe({
            next: res => {
                console.log("Save author success");
                this.fetchAuthors();
                this.authorVisible = false;
            }
        });
    }

    closeDialog() {
        this.visible.set(false);
        this.updateForm.reset();
    }

    getListYears() {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        for (let year = currentYear; year >= startYear; year--) {
            this.years.push(year);
        }
    }
}
