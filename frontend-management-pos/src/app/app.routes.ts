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
import {DiscountComponent} from "./page/main-layout/routes/discount/discount.component";
import {VoucherComponent} from "./page/main-layout/routes/voucher/voucher.component";

export const routes: Routes = [
  {
    path: "quan-ly/login",
    component: LoginComponent
  },
  {
    path: "quan-ly",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "thong-ke",
        pathMatch: "full",
      },
      {
        path: "thong-ke",
        component: DashboardComponent
      },
      {
        path: "ban-hang",
        component: PosComponent
      },
      {
        path: "san-pham",
        component: ProductComponent
      },
      {
        path: "thuoc-tinh",
        component: CategoryComponent
      },
      {
        path: "hoa-don",
        component: OrderComponent
      },
      {
        path: "khach-hang",
        component: CustomerComponent
      },
      {
        path: "nhan-vien",
        component: StaffComponent
      },
      {
        path:"khuyen-mai",
        component:DiscountComponent
      },
      {
        path:"ma-giam-gia",
        component:VoucherComponent
      }
    ]
  }
];
