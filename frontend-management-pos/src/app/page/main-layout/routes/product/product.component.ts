import { Component } from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardModule,
    TableModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [
    {
      code:"sdfsdfdfá",
      name:"sdfdsdafads",
      category:"Product",
      quantity:2
    }
  ];

}
