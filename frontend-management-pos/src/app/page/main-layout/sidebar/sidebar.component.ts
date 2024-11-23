import {Component, inject, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {PanelMenuModule} from "primeng/panelmenu";
import {TieredMenuModule} from "primeng/tieredmenu";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {AuthService} from "../../../core/auth/service/auth.service";

@Component({
    selector: 'app-sidebar',
    imports: [MenubarModule, MenuModule, PanelMenuModule, TieredMenuModule, RippleModule, CardModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    private authService = inject(AuthService);
    user = this.authService.getPayload();
}