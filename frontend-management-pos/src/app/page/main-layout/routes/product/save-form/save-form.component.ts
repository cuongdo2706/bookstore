import {Component, inject, model, OnInit, output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {CategoryService} from "../../../../service/category.service";
import {AuthorService} from "../../../../service/author.service";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {AuthorResponse} from "../../../../model/response/author-response.model";
import {CategoryResponse} from "../../../../model/response/category-response.model";
import {FileUploadComponent} from "../../../../../shared/file-upload/file-upload.component";
import {UploadImageService} from "../../../../service/upload-image.service";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {BookCreatedRequest} from "../../../../model/request/book-created-request.model";
import {ProductService} from "../../../../service/product.service";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ImageResponse} from "../../../../model/response/image-response.model";

@Component({
    selector: 'app-save-form',
    standalone: true,
    imports: [
        DialogModule,
        Button,
        ReactiveFormsModule,
        InputTextModule,
        FloatLabelModule,
        DropdownModule,
        InputTextareaModule,
        FileUploadModule,
        FormsModule,
        FileUploadComponent,
        InputSwitchModule,
        ToastModule
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
    }

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

    saveForm = this.fb.group({
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
    categoryInput = this.fb.group({
        name: ['', Validators.required]
    });
    authorInput = this.fb.group({
        name: ['', Validators.required]
    });


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
            let fileReq: File | null = this.saveForm.controls.imgFile.value;
            let bookReq: BookCreatedRequest = {
                name: this.saveForm.controls.name.value!,
                quantity: this.saveForm.controls.quantity.value!,
                price: this.saveForm.controls.price.value!,
                publisher: this.saveForm.controls.publisher.value,
                translator: this.saveForm.controls.translator.value,
                numOfPages: this.saveForm.controls.numOfPages.value,
                publishedYear: this.saveForm.controls.publishedYear.value,
                isActive: true,
                description: this.saveForm.controls.description.value,
                authorId: this.saveForm.controls.author.value!,
                categoryId: this.saveForm.controls.category.value!,
                ...(!fileReq && await this.uploadImage(fileReq!))
            };
            await firstValueFrom(this.productService.saveProduct(bookReq));
            this.messageService.add({
                severity: "success",
                summary: "Thành công",
                detail: "Thêm sản phẩm mới thành công!!!"
            });
            this.onFetchProduct();
            this.visible.set(false);
            this.saveForm.reset();
            this.saveForm.patchValue({isActive: true});
            this.submitted = false;
        } else {
            this.messageService.add({
                severity: "error",
                summary: "Lỗi",
                detail: "Dữ liệu nhập vào không đúng yêu cầu, hãy nhập lại!!!"
            });
        }
    }

    onFetchProduct() {
        this.productService.fetchProducts(0, 10).subscribe({
                next: res => {
                    this.onSave.emit(res);
                }
            }
        );
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
