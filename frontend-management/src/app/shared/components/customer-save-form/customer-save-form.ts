import {Component, inject, input, model, OnInit, output, signal} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import {FileUpload} from 'primeng/fileupload';
import {phoneNumValidator} from '../../validators/phone-num.validator';
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {DatePicker} from "primeng/datepicker";
import {RadioButton} from "primeng/radiobutton";
import {Select, SelectChangeEvent} from "primeng/select";
import {Address} from "../../models/address";
import {CustomerService} from "../../../core/service/customer.service";
import {AddressService} from "../../../core/service/address.service";
import {Province} from "../../../core/model/response/province-response.model";
import {CustomerCreatedRequest} from "../../../core/model/request/customer-created-request";
import {firstValueFrom} from "rxjs";
import {PageResponse} from "../../../core/model/response/page-response.model";
import {CustomerResponse} from "../../../core/model/response/customer-response.model";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-customer-save-form',
    imports: [
        Dialog,
        FormsModule,
        Button,
        FileUpload,
        ReactiveFormsModule,
        FloatLabel,
        InputText,
        DatePicker,
        RadioButton,
        Select
    ],
    templateUrl: './customer-save-form.html',
    styleUrl: './customer-save-form.css',
    providers: [MessageService]
})
export class CustomerSaveForm implements OnInit {
    ngOnInit(): void {
        this.saveForm = this.fb.group({
            code: null,
            name: [null, Validators.required],
            phoneNum: [null, phoneNumValidator()],
            dob: null,
            gender: null,
            address: null,
            commune: [{value: null, disabled: true}],
            province: null,
            email: [null, Validators.email],
            imgFile: null
        });
        this.fetchProvince();
        this.saveForm.get('province')!.valueChanges.subscribe(value => {
            if (value)
                this.findCommuneByProvinceCode(value);
        });
    }
    
    private fb = inject(FormBuilder);
    private customerService = inject(CustomerService);
    private addressService = inject(AddressService);
    visible = model(false);
    saveForm!: FormGroup;
    submitted = signal(false);
    now: Date = new Date();
    provinces = signal<Province[]>([]);
    communes = signal<{}[]>([]);
    onSave = output<PageResponse<CustomerResponse>>();
    message = output<{}>();
    private messageService = inject(MessageService);
    customerStatus = input.required<boolean>();
    
    closeDialog() {
        this.visible.set(false);
        this.saveForm.reset();
    }
    
    fetchProvince() {
        this.addressService.fetchProvinces().subscribe({
            next: res => {
                this.provinces.set(res.data);
            }
        });
    }
    
    findCommuneByProvinceCode(code: number) {
        this.addressService.fetchCommunes(code).subscribe({
            next: res => {
                this.communes.set(res.data);
            }
        });
    }
    
    selectProvince(event: SelectChangeEvent) {
        if (event.value) this.communes.set(new Address().communes.filter(i => i.provinceCode === <string>event.value));
        this.saveForm.get('commune')?.enable();
    }
    
    clearProvince() {
        this.saveForm.get("province")?.reset();
        this.saveForm.get("commune")?.reset();
        this.saveForm.get('commune')?.disable();
    }
    
    clearCommune() {
        this.saveForm.get("commune")?.reset();
    }
    
    chooseImage(event: any) {
        const file = event.files[0];
        this.saveForm.patchValue({imgFile: file});
    }
    
    removeImage() {
        this.saveForm.patchValue({imgFile: null});
    }
    
    async saveCustomer() {
        this.submitted.set(true);
        if (this.saveForm.valid) {
            let fileReq: File | null = this.saveForm.controls['imgFile'].value;
            let controls = (field: string): any => this.saveForm.controls[`${field}`].value;
            let customerReq: CustomerCreatedRequest = {
                code: controls('code'),
                name: controls('name')!,
                dob: controls('dob'),
                provinceCode: controls('province'),
                communeCode: controls('commune'),
                address: controls('address'),
                email: controls('email'),
            };
            await firstValueFrom(this.customerService.save(customerReq, fileReq));
            await firstValueFrom(this.customerService.search({
                searchKeyword: "",
                sortBy: "name",
                page: 1,
                size: 10,
                isActive: true
            })).then(res => {
                this.onSave.emit(res.data);
                this.message.emit({
                    severity: "success",
                    summary: "Thành công",
                    detail: "Thêm mới thành công!!!"
                });
                this.saveForm.reset();
                this.submitted.set(true);
                this.visible.set(false);
            });
        } else {
            this.messageService.add({
                severity: "error",
                summary: "Lỗi",
                detail: "Dữ liệu nhập vào không đúng yêu cầu, hãy nhập lại!!!"
            });
        }
    }
}
