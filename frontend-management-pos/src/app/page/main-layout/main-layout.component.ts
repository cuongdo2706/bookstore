import {Component, ViewEncapsulation} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {CardModule} from "primeng/card";
import {RouterOutlet} from "@angular/router";
import {ScrollPanelModule} from "primeng/scrollpanel";

@Component({
    selector: 'app-main-layout',
    imports: [
        NavbarComponent,
        SidebarComponent,
        CardModule,
        RouterOutlet,
        ScrollPanelModule
    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './main-layout.component.html',
    standalone: true,
    styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


}
