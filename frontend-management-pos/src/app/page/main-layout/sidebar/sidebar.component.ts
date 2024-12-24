import {Component, inject} from '@angular/core';
import {Menu} from "primeng/menu";
import {Ripple} from "primeng/ripple";
import {AuthService} from "../../../core/auth/service/auth.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    imports: [
        RouterLinkActive,
        Menu,
        Ripple,
        RouterLink
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
    private authService = inject(AuthService);
    user = this.authService.getPayload();
}