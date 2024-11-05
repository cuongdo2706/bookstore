import {Component, inject} from '@angular/core';
import {CardModule} from "primeng/card";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {Button} from "primeng/button";
import {AuthService} from "../../core/auth/service/auth.service";
import {Login} from "../../core/auth/model/login.model";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CardModule,
        ReactiveFormsModule,
        FloatLabelModule,
        InputTextModule,
        PasswordModule,
        Button
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
