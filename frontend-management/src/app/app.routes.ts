import { Routes } from '@angular/router';
import {PageNotFound} from "./features/page-not-found/page-not-found";
import {AuthGuard} from "./core/guard/auth.guard";
import {LoginGuard} from "./core/guard/login.guard";
import {Login} from "./core/component/login/login";
import {MainLayout} from "./core/component/main-layout/main-layout";
import {Coupon} from "./features/coupon/coupon";
import {Promotion} from "./features/promotion/promotion";
import {Dashboard} from "./features/dashboard/dashboard";
import {Pos} from "./features/pos/pos";
import {Product} from "./features/product/product";
import {Staff} from "./features/staff/staff";
import {Customer} from "./features/customer/customer";
import {Order} from "./features/order/order";
import {Attribute} from "./features/attribute/attribute";

export const routes: Routes = [
    {
        path: "dang-nhap",
        component: Login,
        canActivate: [LoginGuard]
    },
    {
        path: "",
        component: MainLayout,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                redirectTo: "thong-ke",
                pathMatch: "full",
            },
            {
                path: "thong-ke",
                title: "Thống kê",
                canActivate: [AuthGuard],
                component: Dashboard
            },
            {
                path: "ban-hang",
                title: "Bán hàng",
                canActivate: [AuthGuard],
                component: Pos
            },
            {
                path: "san-pham",
                title: "Sản phẩm",
                canActivate: [AuthGuard],
                component: Product
            },
            {
                path: "thuoc-tinh",
                title: "Thuộc tính",
                canActivate: [AuthGuard],
                component: Attribute
            }, {
                path: "don-hang",
                title: "Đơn hàng",
                canActivate: [AuthGuard],
                component: Order
            },
            {
                path: "khach-hang",
                title: "Khách hàng",
                canActivate: [AuthGuard],
                component: Customer
            },
            {
                path: "nhan-vien",
                title: "Nhân viên",
                canActivate: [AuthGuard],
                component: Staff
            },
            {
                path: "khuyen-mai",
                title: "Khuyến mãi",
                canActivate: [AuthGuard],
                component: Promotion
            },
            {
                path: "ma-giam-gia",
                title: "Mã giảm giá",
                canActivate: [AuthGuard],
                component: Coupon
            }
        ]
    },
    {
        path: "404",
        component: PageNotFound
    },
    {
        path: "**",
        redirectTo: "/404"
    },

];
