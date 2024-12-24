import {Component, inject} from '@angular/core';
import {Card, CardModule} from "primeng/card";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabel, FloatLabelModule} from "primeng/floatlabel";
import {InputText, InputTextModule} from "primeng/inputtext";
import {Password, PasswordModule} from "primeng/password";
import {Button} from "primeng/button";
import {AuthService} from "../../core/auth/service/auth.service";
import {Login} from "../../core/auth/model/login.model";

@Component({
    selector: 'app-login',
    imports: [
        Button,
        Card,
        ReactiveFormsModule,
        FloatLabel,
        Password,
        InputText
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
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
