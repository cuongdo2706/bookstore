import {Component, inject, input, model, OnInit, output, signal} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {CustomerResponse} from "../../../core/model/response/customer-response.model";
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../../core/service/customer.service";
import {phoneNumValidator} from "../../../shared/validators/phone-num.validator";
import {CustomerUpdatedRequest} from "../../../core/model/request/customer-updated-request";
import {firstValueFrom} from "rxjs";
import {ENV} from "../../../environment";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {FileUpload} from "primeng/fileupload";
import {Image} from "primeng/image";
import {DatePicker} from "primeng/datepicker";
import {RadioButton} from "primeng/radiobutton";
import {Select, SelectChangeEvent} from "primeng/select";
import {AddressService} from "../../../core/service/address.service";
import {Address} from "../../../shared/models/address";
import {Province} from "../../../core/model/response/province-response.model";

@Component({
    selector: 'app-customer-update-form',
    imports: [
        Dialog,
        FormsModule,
        ReactiveFormsModule,
        FloatLabel,
        InputText,
        Button,
        FileUpload,
        Image,
        DatePicker,
        RadioButton,
        Select
    ],
    templateUrl: './customer-update-form.html',
    styleUrl: './customer-update-form.css'
})
export class CustomerUpdateForm implements OnInit {
    ngOnInit(): void {
        this.findCustomerById();
        this.updateForm = this.fb.group({
            code: [null],
            name: [null, [Validators.required]],
            imgFile: null,
            phoneNum: [null, phoneNumValidator()],
            dob: null,
            gender: null,
            address: null,
            province: null,
            email: [null, Validators.email],
        });
        this.fetchProvince();
    }
    
    updateForm!: FormGroup;
    now: Date = new Date();
    visible = model(false);
    private defaultData = signal<CustomerResponse | undefined>(undefined);
    imageUrl = signal<string | undefined>(undefined);
    submitted = signal(false);
    provinces = signal<Province[]>([]);
    communes = signal<{}[]>([]);
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private customerService = inject(CustomerService);
    private addressService = inject(AddressService);
    message = output<{}>();
    updateId = input<number>();
    paginatorReset = output<boolean>();
    initFormValue: any;
    
    async updateCustomer() {
        this.submitted.set(true);
        if (this.updateForm.valid) {
            let controls = (field: string): any => this.updateForm.controls[field].value;
            let fileReq: File | null = controls('imgFile');
            let cusReq: CustomerUpdatedRequest = {
                code: controls('code')!,
                name: controls('name')!,
                dob: controls('dob'),
                provinceCode: controls('province'),
                address: controls('address'),
                email: controls('email'),
            };
            await firstValueFrom(this.customerService.update(this.updateId()!, cusReq, fileReq));
            this.paginatorReset.emit(false);
            this.message.emit(
                    {
                        severity: "success",
                        summary: "Thành công",
                        detail: "Cập nhật thông tin thành công!!!"
                    }
            );
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
    
    isFormValid(): boolean {
        if (JSON.stringify(this.initFormValue) !== JSON.stringify(this.updateForm.value)) {
            return this.updateForm.valid;
        } else {
            return false;
        }
    }
    
    fetchProvince() {
        this.addressService.fetchProvinces().subscribe({
            next: res => {
                this.provinces.set(res.data);
            }
        });
    }
    
    selectProvince(event: SelectChangeEvent) {
        if (event.value) this.communes.set(new Address().communes.filter(i => i.provinceCode === <string>event.value));
        this.updateForm.get('commune')?.enable();
    }
    
    clearProvince() {
        this.updateForm.get("province")?.reset();
    }
    
    
    chooseImage(event: any) {
        const file = event.files[0];
        this.updateForm.patchValue({imgFile: file});
    }
    
    removeImage() {
        this.updateForm.patchValue({imgFile: null});
    }
    
    findCustomerById() {
        this.customerService.findById(this.updateId()!).subscribe({
            next: res => {
                this.updateForm.patchValue({
                    code: res.data.code,
                    name: res.data.name,
                    imgFile: null,
                    phoneNum: res.data.phoneNum,
                    dob: res.data.dob,
                    gender: res.data.gender,
                    address: res.data.address,
                    province: res.data.province?.code,
                    email: res.data.email
                });
                this.imageUrl.set(res.data.image !== null ? `${ENV.API_BASE_URL}images/${res.data.image.publicId}` : ENV.BASE_IMAGE);
                this.defaultData.set(res.data);
                this.initFormValue = this.updateForm.value;
            }
        });
    }
    
    closeDialog() {
        this.visible.set(false);
        this.updateForm.reset();
    }
}
