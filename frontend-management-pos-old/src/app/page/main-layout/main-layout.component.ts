import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import {Card} from "primeng/card";

@Component({
    selector: 'app-main-layout',
    imports: [
        NavbarComponent,
        SidebarComponent,
        RouterOutlet,
        Card,
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


}
