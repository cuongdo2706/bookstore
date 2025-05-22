import {AfterViewInit, Component, model, OnDestroy, ViewChild} from '@angular/core';
import {Dialog} from "primeng/dialog";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {LOAD_WASM, NgxScannerQrcodeComponent} from "ngx-scanner-qrcode";
import {AsyncPipe, JsonPipe} from "@angular/common";

LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@Component({
    selector: 'app-scanner',
    imports: [
        Dialog,
        Button,
        FormsModule,
        NgxScannerQrcodeComponent,
        JsonPipe,
        AsyncPipe
    ],
    templateUrl: './scanner.component.html',
    styleUrl: './scanner.component.css'
})
export class ScannerComponent implements AfterViewInit, OnDestroy {
    ngOnDestroy(): void {
        this.scanner!.stop();
    }

    ngAfterViewInit(): void {
        this.scanner!.start();
    }

    @ViewChild('scanner') scanner: NgxScannerQrcodeComponent | undefined;
    visible = model(false);
    

    onCloseScanner() {
        this.visible.set(false);
        this.scanner!.stop();
    }

}
