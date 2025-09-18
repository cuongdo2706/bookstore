import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Card} from "primeng/card";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
    selector: 'app-main-layout',
    imports: [
        NavbarComponent,
        SidebarComponent,
        RouterOutlet,
        Card,
        SidebarComponent,
        NavbarComponent,
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


}
