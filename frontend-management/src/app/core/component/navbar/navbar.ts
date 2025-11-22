import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService, MenuItem} from "primeng/api";
import {Button} from "primeng/button";
import {TieredMenu} from "primeng/tieredmenu";
import {ConfirmDialog} from "primeng/confirmdialog";
import {Menubar} from "primeng/menubar";

@Component({
    selector: 'app-navbar',
    imports: [
        Button,
        TieredMenu,
        ConfirmDialog,
        Menubar
    ],
    templateUrl: './navbar.html',
    providers: [ConfirmationService],
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
    private confirmationService = inject(ConfirmationService);
    private router = inject(Router);
    items!: MenuItem[];
    
    ngOnInit(): void {
        this.items = [
            {
                label: "Tài khoản",
                icon: "pi pi-user"
            },
            {
                label: "Đăng xuất",
                icon: "pi pi-sign-out"
            }
        ];
    }
    
    confirmSignOut() {
        this.confirmationService.confirm({
            header: "Bạn có chắc muốn đăng xuất ?",
            accept: () => {
                localStorage.removeItem("token");
                this.router.navigate(['/dang-nhap']);
            },
            reject: () => {
            }
        });
    }
}
