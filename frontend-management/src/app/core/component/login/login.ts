import {Component, inject} from '@angular/core';
import {Toast} from "primeng/toast";
import {Card} from "primeng/card";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {AuthService} from "../../service/auth.service";
import {FloatLabel} from "primeng/floatlabel";
import {Button} from "primeng/button";
import {Password} from "primeng/password";
import {InputText} from "primeng/inputtext";
import {LoginRequest} from "../../model/request/login-request.model";

@Component({
    selector: 'app-login',
    imports: [
        Toast,
        Card,
        ReactiveFormsModule,
        FloatLabel,
        Button,
        Password,
        InputText
    ],
    templateUrl: './login.html',
    providers:[MessageService],
    styleUrl: './login.css',
})
export class Login {
    messageService = inject(MessageService);
    private fb: FormBuilder = inject(FormBuilder);
    private authService = inject(AuthService);
    submitted: boolean = false;
    
    loginForm = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
    });
    
    onLogin() {
        this.authService.login(this.loginForm.value as LoginRequest).subscribe();
    }
}
