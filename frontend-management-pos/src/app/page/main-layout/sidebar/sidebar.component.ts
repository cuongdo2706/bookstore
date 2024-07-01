import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {PanelMenuModule} from "primeng/panelmenu";
import {TieredMenuModule} from "primeng/tieredmenu";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenubarModule, MenuModule, PanelMenuModule, TieredMenuModule,RippleModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  item=[{}];

  ngOnInit(): void {

  }

}
