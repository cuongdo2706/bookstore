import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainLayoutComponent} from "./page/main-layout/main-layout.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrl: './app.component.css'
})
export class AppComponent {
}
