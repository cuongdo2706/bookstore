import {Component, effect, inject, input, model, OnInit, output} from '@angular/core';
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
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {ImageModule} from "primeng/image";
import {ToastModule} from "primeng/toast";
import {lastValueFrom} from "rxjs";
import {AppConstants} from "../../../../../app.constants";
import {BookUpdatedRequest} from "../../../../model/request/book-updated-request.model";

@Component({
    selector: 'app-update-form',
    standalone: true,
    imports: [
        DialogModule,
        ReactiveFormsModule,
        Button,
        DropdownModule,
        FloatLabelModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        FileUploadModule,
        ImageModule,
        ToastModule
    ],
    templateUrl: './update-form.component.html',
    styleUrl: './update-form.component.css',
    providers: [MessageService]
})


export class UpdateFormComponent implements OnInit {

    ngOnInit() {
        this.findProductById();
        this.fetchAuthors();
        this.fetchCategories();
        this.getListYears();
    }

    defaultData!: ProductResponse;
    imageUrl!: string;
    publicId!: string | null;
    years: number[] = [];
    submitted = false;
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
    onUpdate = output<any>();
    updateId = input<number | null>(null);
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


    async updateBook() {
        this.submitted = true;
        if (this.updateForm.valid) {
            let fileReq: File | null = this.updateForm.controls.imgFile.value;
            let bookReq: BookUpdatedRequest = {
                ...(this.updateForm.controls.name.value !== this.defaultData.name ? {name: this.updateForm.controls.name.value!} : null),
                quantity: this.updateForm.controls.quantity.value!,
            };
            console.log(bookReq);
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
