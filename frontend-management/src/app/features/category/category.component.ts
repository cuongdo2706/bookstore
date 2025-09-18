import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-category',
    imports: [
        CardModule
    ],
    templateUrl: './category.component.html',
    styleUrl: './category.component.css'
})
export class CategoryComponent {

}
