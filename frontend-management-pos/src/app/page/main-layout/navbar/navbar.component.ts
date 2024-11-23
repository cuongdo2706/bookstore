import {Component, inject, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {Button, ButtonDirective} from "primeng/button";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    imports: [
        MenubarModule,
        AvatarModule,
        AvatarGroupModule,
        Button,
        TieredMenuModule,
        ButtonDirective,
        ConfirmDialogModule
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
