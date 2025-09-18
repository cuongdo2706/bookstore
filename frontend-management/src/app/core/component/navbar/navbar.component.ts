import {Component, inject, OnInit} from '@angular/core';
import {Menubar} from "primeng/menubar";
import {Button} from "primeng/button";
import {TieredMenu} from "primeng/tieredmenu";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ConfirmDialog} from "primeng/confirmdialog";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    imports: [
        Button,
        Menubar,
        TieredMenu,
        ConfirmDialog
    ],
    providers: [ConfirmationService],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    private confirmationService = inject(ConfirmationService);
    private router=inject(Router);
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

    confirmSignOut(){
        this.confirmationService.confirm({
            header:"Bạn có chắc muốn đăng xuất ?",
            accept:()=>{
                localStorage.removeItem("token");
                this.router.navigate(['/dang-nhap']);
            },
            reject:()=>{}
        })
    }

}
