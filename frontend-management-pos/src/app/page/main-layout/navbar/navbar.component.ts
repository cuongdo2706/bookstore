import { Component } from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    AvatarGroupModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
