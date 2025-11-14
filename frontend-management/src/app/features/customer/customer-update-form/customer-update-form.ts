import {Component, inject, input, model, OnInit, output, signal} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {CustomerResponse} from "../../../core/model/response/customer-response.model";
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomerService} from "../../../core/service/customer.service";
import {phoneNumValidator} from "../../../shared/validators/phone-num.validator";
import {CustomerUpdatedRequest} from "../../../core/model/request/customer-updated-request";

@Component({
    selector: 'app-customer-update-form',
    imports: [
        Dialog,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './customer-update-form.html',
    styleUrl: './customer-update-form.css'
})
export class CustomerUpdateForm implements OnInit {
    ngOnInit(): void {
        this.updateForm = this.fb.group({
            code: [null],
            name: [null, [Validators.required]],
            imgFile: null,
            phoneNum: [null, phoneNumValidator()],
            dob: null,
            gender: null,
            address: null,
            commune: [{value: null, disabled: true}],
            province: null,
            email: [null, Validators.email],
        });
    }
    
    updateForm!: FormGroup;
    visible = model(false);
    private defaultData = signal<CustomerResponse | undefined>(undefined);
    imageUrl = signal<string | undefined>(undefined);
    submitted = signal(false);
    private messageService = inject(MessageService);
    private fb = inject(FormBuilder);
    private customerService = inject(CustomerService);
    message = output<{}>();
    updateId = input<number>();
    paginatorReset = output<boolean>();
    
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
                communeCode: controls('commune'),
                address: controls('address'),
                email: controls('email'),
            };
        }
    }
}
