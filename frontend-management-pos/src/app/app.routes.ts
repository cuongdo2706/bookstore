import {Routes} from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {MainLayoutComponent} from "./page/main-layout/main-layout.component";
import {DashboardComponent} from "./page/main-layout/routes/dashboard/dashboard.component";
import {PosComponent} from "./page/main-layout/routes/pos/pos.component";
import {ProductComponent} from "./page/main-layout/routes/product/product.component";
import {CategoryComponent} from "./page/main-layout/routes/category/category.component";
import {OrderComponent} from "./page/main-layout/routes/order/order.component";
import {CustomerComponent} from "./page/main-layout/routes/customer/customer.component";
import {StaffComponent} from "./page/main-layout/routes/staff/staff.component";
import {PromotionComponent} from "./page/main-layout/routes/promotion/promotion.component";
import {CouponComponent} from "./page/main-layout/routes/coupon/coupon.component";
import {PageNotFoundComponent} from "./page/main-layout/routes/page-not-found/page-not-found.component";
import {AuthGuard} from "./core/auth/guard/auth.guard";
import {LoginGuard} from "./core/auth/guard/login.guard";

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
            },
            {
                path: "hoa-don",
                title: "Hoá đơn",
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
