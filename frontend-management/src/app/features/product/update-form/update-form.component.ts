import {Component, inject, input, model, OnInit, output, signal, ViewEncapsulation} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {FileUpload} from "primeng/fileupload";
import {Image} from "primeng/image";
import {firstValueFrom} from "rxjs";
import {Select} from "primeng/select";
import {Toast} from "primeng/toast";
import {InputNumber} from "primeng/inputnumber";
import {MultiSelect} from "primeng/multiselect";
import {ProductResponse} from "../../../core/model/response/product-response.model";
import {ProductService} from "../../../core/service/product.service";
import {CategoryService} from "../../../core/service/category.service";
import {AuthorService} from "../../../core/service/author.service";
import {AuthorResponse} from "../../../core/model/response/author-response.model";
import {CategoryResponse} from "../../../core/model/response/category-response.model";
import {PageResponse} from "../../../core/model/response/page-response.model";
import {ProductUpdatedRequest} from "../../../core/model/request/product-updated-request.model";
import {AppConstants} from "../../../app.constants";
import {PublisherResponse} from "../../../core/model/response/publisher-response.model";
import {PublisherService} from "../../../core/service/publisher.service";

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
        this.getListYears();
        this.updateForm = this.fb.group({
            name: this.fb.control<string | null>(null, [Validators.required]),
            imgFile: null,
            publisherId: this.fb.control<number | null>(null),
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
    private defaultData = signal<ProductResponse | undefined>(undefined);
    imageUrl = signal<string | undefined>(undefined);
    publicId = signal<string | null>(null);
    years = signal<number[]>([]);
    submitted = signal(false);
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    private authorService = inject(AuthorService);
    private publisherService = inject(PublisherService);
    authors = model.required<AuthorResponse[]>();
    categories = model.required<CategoryResponse[]>();
    publishers = model.required<PublisherResponse[]>();
    categoryVisible = signal(false);
    authorVisible = signal(false);
    visible = model(false);
    message = output<{}>();
    productStatus = input.required<boolean>();
    categoryIds = input.required<number[]>();
    authorIds = input.required<number[]>();
    publisherIds = input.required<number[]>();
    onUpdate = output<PageResponse<ProductResponse>>();
    updateId = input<number>();

    async updateBook() {
        this.submitted.set(true);
        if (this.updateForm.valid) {
            let fileReq: File | null = this.updateForm.controls['imgFile'].value;
            let bookReq: ProductUpdatedRequest = {
                name: this.updateForm.controls['name'].value!,
                quantity: this.updateForm.controls['quantity'].value!,
                price: this.updateForm.controls['price'].value!,
                publisherId: this.updateForm.controls['publisherId'].value,
                translator: this.updateForm.controls['translator'].value,
                numOfPages: this.updateForm.controls['numOfPages'].value,
                publishedYear: this.updateForm.controls['publishedYear'].value,
                description: this.updateForm.controls['description'].value,
                authorIds: this.updateForm.controls['authors'].value!,
                categoryIds: this.updateForm.controls['categories'].value!
            };
            await firstValueFrom(this.productService.update(this.updateId()!, bookReq, fileReq));
            await firstValueFrom(this.productService.search({
                page: 1,
                size: 10,
                sortBy: "name",
                nameOrCodeKeyword: "",
                isActive: this.productStatus(),
                authorIds: this.authorIds(),
                categoryIds: this.categoryIds(),
                publisherIds: this.publisherIds()
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

            this.submitted.set(false);
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
        this.productService.findById(id).subscribe({
            next: res => {
                let authorIds: number[] = res.data.authors.map(author => author.id);
                let categoryIds: number[] = res.data.categories.map(category => category.id);
                this.updateForm.patchValue({
                    name: res.data.name,
                    imgFile: null,
                    publisherId: res.data.publisher.id,
                    translator: res.data.translator,
                    authors: authorIds,
                    categories: categoryIds,
                    quantity: res.data.quantity,
                    price: res.data.price,
                    numOfPages: res.data.numOfPages,
                    publishedYear: res.data?.publishedYear,
                    description: res.data.description,
                });
                this.imageUrl.set(res.data.imgUrl || AppConstants.BASE_IMAGE);
                this.publicId.set(res.data.publicId);
                this.defaultData.set(res.data);
            }
        });

    }


    saveCategoryForm() {
        this.categoryVisible.set(true);
    }

    saveCategory(input: any) {
        console.log(input);
        this.categoryService.save({name: input.name}).subscribe({
            next: res => {
                this.categories.update(item => [...item, res.data]);
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
        this.authorService.save({name: input.name}).subscribe({
            next: res => {
                this.authors.update(item => [...item, res.data]);
                this.authorVisible.set(false);
            }
        });
    }

    savePublisher(input: any) {
        this.publisherService.save({name: input.name}).subscribe({
            next: res => {
                this.publishers.update(item => [...item, res.data]);
                // this.publisherVisible.set(false);
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
            this.years.update(item => [...item, year]);
        }
    }
}
