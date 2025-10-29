import {Component, inject, input, model, OnInit, output, signal, ViewEncapsulation} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {FloatLabel} from "primeng/floatlabel";
import {FileUpload} from "primeng/fileupload";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {Toast} from "primeng/toast";
import {MessageService} from "primeng/api";
import {Textarea} from "primeng/textarea";
import {Select} from "primeng/select";
import {InputNumber} from "primeng/inputnumber";
import {MultiSelect} from "primeng/multiselect";
import {CategoryResponse} from "../../../core/model/response/category-response.model";
import {ProductService} from "../../../core/service/product.service";
import {CategoryService} from "../../../core/service/category.service";
import {AuthorService} from "../../../core/service/author.service";
import {AuthorResponse} from "../../../core/model/response/author-response.model";
import {ProductCreatedRequest} from "../../../core/model/request/product-created-request.model";
import {PublisherService} from "../../../core/service/publisher.service";
import {PublisherResponse} from "../../../core/model/response/publisher-response.model";

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

        this.getListYears();
        this.saveForm = this.fb.group({
            code: null,
            name: [null, [Validators.required]],
            imgFile: null,
            publisherId: null,
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
        this.publisherInput=this.fb.group({
            name: ['',Validators.required]
        })
    }

    saveForm!: FormGroup;
    categoryInput!: FormGroup;
    authorInput!: FormGroup;
    publisherInput!:FormGroup;
    years = signal<number[]>([]);
    submitted = signal(false);
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private productService = inject(ProductService);
    private categoryService = inject(CategoryService);
    private authorService = inject(AuthorService);
    private publisherService = inject(PublisherService);
    visible = model(false);
    categoryVisible = signal(false);
    authorVisible = signal(false);
    publisherVisible=signal(false)
    authors = model.required<AuthorResponse[]>();
    categories = model.required<CategoryResponse[]>();
    publishers = model.required<PublisherResponse[]>();
    onSave = output<any>();
    message = output<{}>();
    productStatus = input.required<boolean>();
    categoryIds = input.required<number[]>();
    authorIds = input.required<number[]>();
    publisherIds = input.required<number[]>();


    closeDialog() {
        this.visible.set(false);
        this.saveForm.reset();
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
                code:this.saveForm.controls['code'].value,
                name: this.saveForm.controls['name'].value!,
                quantity: this.saveForm.controls['quantity'].value!,
                price: this.saveForm.controls['price'].value!,
                publisherId: this.saveForm.controls['publisherId'].value,
                translator: this.saveForm.controls['translator'].value,
                numOfPages: this.saveForm.controls['numOfPages'].value,
                publishedYear: this.saveForm.controls['publishedYear'].value,
                description: this.saveForm.controls['description'].value,
                authorIds: this.saveForm.controls['authors'].value!,
                categoryIds: this.saveForm.controls['categories'].value!
            };
            await firstValueFrom(this.productService.save(bookReq, fileReq));
            const res = await firstValueFrom(this.productService.search({
                page: 1,
                size: 10,
                sortBy: "name",
                nameOrCodeKeyword: "",
                isActive: this.productStatus(),
                authorIds: this.authorIds(),
                categoryIds: this.categoryIds(),
                publisherIds: this.publisherIds()
            }));
            
            // xử lý kết quả
            this.onSave.emit(res.data);
            this.message.emit({
                severity: "success",
                summary: "Thành công",
                detail: "Thêm sản phẩm mới thành công!!!"
            });
            this.saveForm.reset();
            this.submitted.set(false);
            this.visible.set(false);
        } else {
            this.messageService.add({
                severity: "error",
                summary: "Lỗi",
                detail: "Dữ liệu nhập vào không đúng yêu cầu, hãy nhập lại!!!"
            });
        }
    }


    saveCategoryForm() {
        this.categoryVisible.set(true);
    }

    saveCategory(input: any) {
        this.categoryService.save({name: input.name}).subscribe({
            next: res => {
                this.categories.update(item => [...item, res.data]);
                this.categoryVisible.set(false);
            }
        });
    }

    saveAuthorForm() {
        this.authorVisible.set(true);
    }
    savePublisherForm() {
        this.publisherVisible.set(true);
    }

    saveAuthor(input: any) {
        this.authorService.save(input).subscribe({
            next: res => {
                this.authors.update(item => [...item, res.data]);
                this.authorVisible.set(false);
            }
        });
    }
    savePublisher(input: any) {
        this.publisherService.save(input).subscribe({
            next: res => {
                this.publishers.update(item => [...item, res.data]);
                this.publisherVisible.set(false);
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
