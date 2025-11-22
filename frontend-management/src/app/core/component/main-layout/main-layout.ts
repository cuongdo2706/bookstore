import { Component } from '@angular/core';
import {Navbar} from "../navbar/navbar";
import {Sidebar} from "../sidebar/sidebar";
import {RouterOutlet} from "@angular/router";
import {Card} from "primeng/card";

@Component({
  selector: 'app-main-layout',
    imports: [
        Navbar,
        Sidebar,
        RouterOutlet,
        Card
    ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
