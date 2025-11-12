import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./core/component/main-layout/main-layout.component";
import {LoginComponent} from "./core/component/login/login.component";
import {LoginGuard} from "./core/guard/login.guard";
import {AuthGuard} from "./core/guard/auth.guard";
import {Dashboard} from "./features/dashboard/dashboard";
import {Pos} from "./features/pos/pos";
import {Product} from "./features/product/product";
import {Attribute} from "./features/attribute/attribute";
import {Order} from "./features/order/order";
import {Customer} from "./features/customer/customer";
import {Staff} from "./features/staff/staff";
import {Promotion} from "./features/promotion/promotion";
import {Coupon} from "./features/coupon/coupon";
import {PageNotFound} from "./features/page-not-found/page-not-found";


export const routes: Routes = [
    {
        path: "dang-nhap",
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "",
        component: MainLayoutComponent,
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
