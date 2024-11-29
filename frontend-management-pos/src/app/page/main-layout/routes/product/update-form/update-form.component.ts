import {Component, DestroyRef, effect, inject, input, model, OnDestroy, OnInit, output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../../../service/product.service";
import {CategoryService} from "../../../../service/category.service";
import {AuthorService} from "../../../../service/author.service";
import {UploadImageService} from "../../../../service/upload-image.service";
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {ProductResponse} from "../../../../model/response/product-response.model";
import {DropdownModule} from "primeng/dropdown";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {AuthorResponse} from "../../../../model/response/author-response.model";
import {CategoryResponse} from "../../../../model/response/category-response.model";
import {InputSwitchModule} from "primeng/inputswitch";
import {FileUploadModule} from "primeng/fileupload";
import {ImageModule} from "primeng/image";
import {ToastModule} from "primeng/toast";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {AppConstants} from "../../../../../app.constants";
import {BookUpdatedRequest} from "../../../../model/request/book-updated-request.model";
import {ImageResponse} from "../../../../model/response/image-response.model";
import {PageResponse} from "../../../../model/response/page-response.model";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
    selector: 'app-update-form',
    imports: [
        DialogModule,
        ReactiveFormsModule,
        Button,
        DropdownModule,
        FloatLabelModule,
        InputSwitchModule,
        FileUploadModule,
        ImageModule,
        ToastModule,
        InputTextareaModule,
        InputTextModule
    ],
    templateUrl: './update-form.component.html',
    styleUrl: './update-form.component.css',
    standalone: true,
    providers: [MessageService]
})


export class UpdateFormComponent implements OnInit {

    ngOnInit() {
        this.findProductById();
        this.fetchAuthors();
        this.fetchCategories();
        this.getListYears();
    }

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
    onUpdate = output<PageResponse<ProductResponse>>();
    updateId = input<number>();
    updateForm = this.fb.group({
        name: this.fb.control<string | null>(null, [Validators.required]),
        imgFile: null,
        publisher: this.fb.control<string | null>(null),
        translator: this.fb.control<string | null>(null),
        author: this.fb.control<number | null>(null, [Validators.required]),
        category: this.fb.control<number | null>(null, [Validators.required]),
        quantity: [0, [Validators.required, Validators.min(0), Validators.pattern('^[1-9]\\d*$')]],
        price: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
        numOfPages: this.fb.control<number | null>(null, [Validators.min(1), Validators.pattern('^[1-9]\\d*$')]),
        publishedYear: this.fb.control<number | null>(null),
        description: this.fb.control<string | null>(null)
    });


    categoryInput = this.fb.group({
        name: ['', Validators.required]
    });
    authorInput = this.fb.group({
        name: ['', Validators.required]
    });

    async uploadImage(file: File): Promise<ImageResponse> {
        return await lastValueFrom(this.uploadImageService.uploadImage(file));
    }

    async updateImage(file: File, publicId: string): Promise<ImageResponse> {
        return await lastValueFrom(this.uploadImageService.updateImage(file, publicId));
    }

    async updateBook() {
        this.submitted = true;
        if (this.updateForm.valid) {
            let fileReq: File | null = this.updateForm.controls.imgFile.value;
            let bookReq: BookUpdatedRequest = {
                ...(this.updateForm.controls.name.value !== this.defaultData.name ?
                    {name: this.updateForm.controls.name.value!} : null),
                ...(this.updateForm.controls.quantity.value !== this.defaultData.quantity ?
                    {quantity: this.updateForm.controls.quantity.value!} : null),
                ...(this.updateForm.controls.price.value !== this.defaultData.price ?
                    {price: this.updateForm.controls.price.value!} : null),
                ...(this.updateForm.controls.publisher.value !== this.defaultData.publisher ?
                    {publisher: this.updateForm.controls.publisher.value} : null),
                ...(this.updateForm.controls.translator.value !== this.defaultData.translator ?
                    {translator: this.updateForm.controls.translator.value} : null),
                ...(this.updateForm.controls.numOfPages.value !== this.defaultData.numOfPages ?
                    {numOfPages: this.updateForm.controls.numOfPages.value} : null),
                ...(this.updateForm.controls.publishedYear.value !== this.defaultData.publishedYear ?
                    {publishedYear: this.updateForm.controls.publishedYear.value} : null),
                ...(this.updateForm.controls.description.value !== this.defaultData.description ?
                    {description: this.updateForm.controls.description.value} : null),
                ...(this.updateForm.controls.author.value !== this.defaultData.author.id ?
                    {authorId: this.updateForm.controls.author.value!} : null),
                ...(this.updateForm.controls.category.value !== this.defaultData.category.id ?
                    {categoryId: this.updateForm.controls.category.value!} : null),
                ...(this.defaultData.publicId !== null ?
                    (fileReq !== null ? await this.updateImage(fileReq, this.defaultData.publicId) : null) :
                    (fileReq !== null ? await this.uploadImage(fileReq) : null))
            };
            await firstValueFrom(this.productService.updateProduct(this.updateId()!, bookReq));
            await firstValueFrom(this.productService.fetchProducts(0, 10))
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
            this.message.emit({
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
                this.updateForm.patchValue({
                    name: res.data.name,
                    imgFile: null,
                    publisher: res.data.publisher,
                    translator: res.data.translator,
                    author: res.data.author.id,
                    category: res.data.category.id,
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
    };

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
