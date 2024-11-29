import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-category',
    imports: [
        CardModule
    ],
    templateUrl: './category.component.html',
    standalone: true,
    styleUrl: './category.component.css'
})
export class CategoryComponent {

}
