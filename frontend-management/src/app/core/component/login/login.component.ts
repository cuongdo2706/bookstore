import {Component, inject} from '@angular/core';
import {Card} from "primeng/card";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Password} from "primeng/password";
import {Button} from "primeng/button";
import {Toast} from "primeng/toast";
import {MessageService} from "primeng/api";
import {AuthService} from "../../service/auth.service";
import {Login} from "../../model/request/login-request.model";

@Component({
    selector: 'app-login',
    imports: [
        Button,
        Card,
        ReactiveFormsModule,
        FloatLabel,
        Password,
        InputText,
        Toast
    ],
    providers: [MessageService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    messageService = inject(MessageService);
    private fb: FormBuilder = inject(FormBuilder);
    private authService = inject(AuthService);
    submitted: boolean = false;

    loginForm = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
    });

    onLogin() {
        this.authService.login(this.loginForm.value as Login).subscribe();
    }
}
