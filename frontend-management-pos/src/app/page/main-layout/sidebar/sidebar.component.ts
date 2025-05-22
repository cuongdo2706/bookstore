import {Component, inject, OnInit} from '@angular/core';
import {Menu} from "primeng/menu";
import {Ripple} from "primeng/ripple";
import {AuthService} from "../../../core/auth/service/auth.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuItem} from "primeng/api";

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
export class SidebarComponent implements OnInit {
    items!: MenuItem[];

    ngOnInit(): void {
        this.items = [
            {
                label: 'Thống kê',
                icon: 'pi pi-chart-bar',
                routerLink: '/thong-ke'
            },
            {
                label: 'Bán hàng',
                icon: 'pi pi-shopping-cart',
                routerLink: '/ban-hang'
            },
            {
                label: 'Sản phẩm',
                icon: 'pi pi-book',
                routerLink: '/san-pham'
            },
            {
                label: 'Thuộc tính',
                icon: 'pi pi-bars',
                routerLink: 'thuoc-tinh'
            },
            {
                label: 'Hoá đơn',
                icon: 'pi pi-receipt',
                items: [
                    {
                        label: 'Tại quầy',
                        routerLink: '/hoa-don-tai-quay'
                    },
                    {
                        label: 'Online',
                        routerLink: '/hoa-don-online'
                    }
                ]
            },
            {
                label: 'Khách hàng',
                icon: 'pi pi-id-card',
                routerLink: 'khach-hang'
            },
            {
                label: 'Nhân viên',
                icon: 'pi pi-id-card',
                routerLink: 'nhan-vien'
            },
            {
                label: 'Khuyến mãi',
                icon: 'pi pi-percentage',
                routerLink: 'khuyen-mai'
            },
            {
                label: 'Mã giảm giá',
                icon: 'pi pi-ticket',
                routerLink: 'ma-giam-gia'
            }
        ];
    }

    private authService = inject(AuthService);
    user: any = this.authService.getPayload();
    readonly defaultImg: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAIVBMVEXg4OC9vb26urrFxcXc3NzQ0NDU1NTX19fCwsLLy8vIyMjdqL0kAAADn0lEQVR4nO2c23bjIAxFDQgM/P8H19hJ29wcRLiIrLNf2pm+sBdYRkh4WQAAAAAAAAAAAAAAAAAAAAAQDNG6Eo0exeeQszEa470xMVo3s5EL3iuttdpIP7wPbvSYCnFGPcHMqEP+mUrCT7fYgn7lsq24MHp0PMyJy2ZjRo+PweslNt9SW9+6bDbr6FHmkeMyiw09jciPmBlWWshzUWqCmOZyXZQS//p8H8j+EB/S7OkL5hZtR4/2DfkqidGjPYczMeKnhjcxsqdmZU3MNjWSQ8DZXvmpjOR1lvny/0Py9pnrIvmhIeYqE/3QOL6M3C2N5booJTcCQEYqkJHKV0Wzr3rPfNUOYGHkzAd+9IhP4OVmwnfNC1dm9HhPYeYAkjMAbnAWHJh3WCFA8uOf4EyN9IlZ6LzMdOMi/+j8m86aGbtN0e+YK3nnTZNUacln2GjxJYALObUz+Q//lfc287gsqRZ41tQwQwXwP/b1g6P9FHHsPxSe62gfZlpiV9ZN585HbypT1P+fQC5c282OhrMwdfvcQqsLMXUCxuDWqU0AAAAAAAAA7yFK15oO0u+jx1PGlsdYG0KMKZk5MNs/QrB2qryGnN3zsZRb3ubNx3/smdoMV7Zo90jDPjs1S3/djQQLrcEwy83eyDzfoMCum1+ExB092YdTpXy0qFNBiuUmV58oYnrI5Rf+Tn3M8PhGLlZR2XXiWB0Xa5kcxHFlzvW0cFGCVqNC9UnV4gOdMZEt1p6Wi42K3VXy7i+W0fvWI6N1oYSucaCgTZZHxweH2/DHp1+LYOM1dtDJpotLp+dmbROS79GqR0yrs6/MsOnQwMlvkS+2ab/QeqkkWrs0f8P8p3VEa7iLeaRxd+3a00U1DmhdV1nrdZb9TYk6tO1Lq5wmv6NtavNVz8x3heZuu5ku+xnq5aJUh1M07tcYStFdTgLa55m7S6fsjPtxiSKXXq3PVO98+aVLv6pA7oeyyunZXt/apu9VgbY2va89MO6WcRlwF62ZzZh7dW1imu5fBNhp8b4ZdxWtwdnmwOuOtas0Y79HSVXz6OG9GpXaAPZGgMEqS62a87g68x0VJkfEtBzQh1V07UV1npEtX2taiVJJlOoIVNkp0BHVanbHymrb0CrKiGCvIJud6RiZ6+sWcnvj6eu7zXuj6fBWuXyOq6aXTubU9Pj7y3H9dPT42BxN56nnfCf1m0/Wbv4I/TJ6JAAAAAAAAAAAAAAAAAAAAKAyP9nWJazJmDYJAAAAAElFTkSuQmCC";
}