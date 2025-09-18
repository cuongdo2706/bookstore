import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./core/component/main-layout/main-layout.component";
import {LoginComponent} from "./core/component/login/login.component";
import {LoginGuard} from "./core/guard/login.guard";
import {AuthGuard} from "./core/guard/auth.guard";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {PosComponent} from "./features/pos/pos.component";
import {ProductComponent} from "./features/product/product.component";
import {CategoryComponent} from "./features/category/category.component";
import {OrderComponent} from "./features/order/order.component";
import {CustomerComponent} from "./features/customer/customer.component";
import {StaffComponent} from "./features/staff/staff.component";
import {PromotionComponent} from "./features/promotion/promotion.component";
import {CouponComponent} from "./features/coupon/coupon.component";
import {PageNotFoundComponent} from "./features/page-not-found/page-not-found.component";


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
                component: DashboardComponent
            },
            {
                path: "ban-hang",
                title: "Bán hàng",
                canActivate: [AuthGuard],
                component: PosComponent
            },
            {
                path: "san-pham",
                title: "Sản phẩm",
                canActivate: [AuthGuard],
                component: ProductComponent
            },
            {
                path: "thuoc-tinh",
                title: "Thuộc tính",
                canActivate: [AuthGuard],
                component: CategoryComponent
            }, {
                path: "don-hang",
                title: "Đơn hàng",
                canActivate: [AuthGuard],
                component: OrderComponent
            },
            {
                path: "khach-hang",
                title: "Khách hàng",
                canActivate: [AuthGuard],
                component: CustomerComponent
            },
            {
                path: "nhan-vien",
                title: "Nhân viên",
                canActivate: [AuthGuard],
                component: StaffComponent
            },
            {
                path: "khuyen-mai",
                title: "Khuyến mãi",
                canActivate: [AuthGuard],
                component: PromotionComponent
            },
            {
                path: "ma-giam-gia",
                title: "Mã giảm giá",
                canActivate: [AuthGuard],
                component: CouponComponent
            }
        ]
    },
    {
        path: "404",
        component: PageNotFoundComponent
    },
    {
        path: "**",
        redirectTo: "/404"
    },

];
