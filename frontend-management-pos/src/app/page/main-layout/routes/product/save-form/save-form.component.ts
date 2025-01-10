import {Component, inject, model, OnInit, output} from '@angular/core';
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
import {ProductCreatedRequest} from "../../../../model/request/product-created-request.model";
import {ProductService} from "../../../../service/product.service";
import {Toast} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ImageResponse} from "../../../../model/response/image-response.model";
import {Textarea} from "primeng/textarea";
import {Select} from "primeng/select";
import {ToggleSwitch} from "primeng/toggleswitch";

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
        ToggleSwitch
    ],
    templateUrl: './save-form.component.html',
    styleUrl: './save-form.component.css',
    providers: [MessageService]
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
            author: [null, [Validators.required]],
            category: [null, [Validators.required]],
            quantity: [null, [Validators.required, Validators.min(0), Validators.pattern('^[1-9]\\d*$')]],
            price: [null, [Validators.required, Validators.min(1)]],
            numOfPages: [null, [Validators.min(1), Validators.pattern('^[1-9]\\d*$')]],
            publishedYear: null,
            isActive: true,
            description: null,
        });
        this.categoryInput = this.fb.group({
            name: ['', Validators.required]
        });
        this.authorInput = this.fb.group({
            name: ['', Validators.required]
        });
    }

    saveForm!:FormGroup;
    categoryInput!:FormGroup;
    authorInput!:FormGroup;
    years: number[] = [];
    submitted = false;
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private productService = inject(ProductService);
    private uploadImageService = inject(UploadImageService);
    private categoryService = inject(CategoryService);
    private authorService = inject(AuthorService);
    visible = model(false);
    categoryVisible = false;
    authorVisible = false;
    authors: AuthorResponse[] = [];
    categories: CategoryResponse[] = [];
    onSave = output<any>();
    message = output<{}>();





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

    async uploadImage(file: File): Promise<ImageResponse> {
        return await lastValueFrom(this.uploadImageService.uploadImage(file));
    }


    async saveBook() {
        this.submitted = true;
        if (this.saveForm.valid) {
            let fileReq: File | null = this.saveForm.controls['imgFile'].value;
            console.log(!fileReq);
            let bookReq: ProductCreatedRequest = {
                name: this.saveForm.controls['name'].value!,
                quantity: this.saveForm.controls['quantity'].value!,
                price: this.saveForm.controls['price'].value!,
                ...(this.saveForm.controls['publisher'].value != null ?
                    {publisher: this.saveForm.controls['publisher'].value} : null),
                ...(this.saveForm.controls['translator'].value != null ?
                    {translator: this.saveForm.controls['translator'].value} : null),
                ...(this.saveForm.controls['numOfPages'].value != null ?
                    {numOfPages: this.saveForm.controls['numOfPages'].value} : null),
                ...(this.saveForm.controls['publishedYear'].value != null ?
                    {publishedYear: this.saveForm.controls['publishedYear'].value} : null),
                isActive: true,
                ...(this.saveForm.controls['description'].value != null ?
                    {description: this.saveForm.controls['description'].value} : null),
                authorId: this.saveForm.controls['author'].value!,
                categoryId: this.saveForm.controls['category'].value!,
                ...(fileReq !== null && await this.uploadImage(fileReq!))
            };
            console.log(bookReq);
            await firstValueFrom(this.productService.saveProduct(bookReq));
            await firstValueFrom(this.productService.fetchProducts(0, 10))
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


    saveCategoryForm() {
        this.categoryVisible = true;
    }

    saveCategory(input: any) {
        console.log(input);
        this.categoryService.postCategories(input.name).subscribe({
            next: res => {
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

    getListYears() {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        for (let year = currentYear; year >= startYear; year--) {
            this.years.push(year);
        }
    }
}
