import {Component, inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Select} from "primeng/select";
import {SplitButton} from "primeng/splitbutton";
import {Card} from "primeng/card";
import {InputNumber} from "primeng/inputnumber";
import {OrderService} from "../../../service/order.service";
import {ProductService} from "../../../service/product.service";
import {AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent} from "primeng/autocomplete";
import {ProductResponse} from "../../../model/response/product-response.model";
import {Image} from "primeng/image";

interface Tab {
    createdAt: Date;
    totalPrice: number;
    totalReceive: number;
    customerId: number | null;
    staffId: number | null;
    orderDetails: {
        bookId: number;
        quantity: number;
        price: number;
    }[];
}

@Component({
    selector: 'app-pos',
    imports: [
        Button,
        FormsModule,
        Select,
        SplitButton,
        Card,
        InputNumber,
        ReactiveFormsModule,
        AutoComplete,
        Image,
    ],
    templateUrl: './pos.component.html',
    styleUrl: './pos.component.css',
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})

export class PosComponent implements OnInit {
    posForm!: FormGroup;

    ngOnInit() {
        this.loadTabsFromStorage();
        this.posForm = this.fb.group({
            totalReceive: [null, Validators.required],
            customerId: [null, Validators.required],
            staffId: [null, Validators.required],
            orderDetails: this.fb.array([])
        });
    }

    private orderService = inject(OrderService);
    private productService = inject(ProductService);
    private fb = inject(FormBuilder);
    messageService = inject(MessageService);
    readonly MAX_TABS: number = 5;
    tabs = signal<Tab[]>(JSON.parse(<string>localStorage.getItem("pos_tabs")) || {});
    selectedTab = signal<Tab>(this.tabs()[0]);
    products = signal<ProductResponse[]>([]);
    selectedProduct: any;


    searchProduct(event: AutoCompleteCompleteEvent) {
        this.productService.searchProducts(0, 10, event.query, "").subscribe({
            next: res => {
                this.products.set(res.data.content);
            }
        });
    }

    selectProduct(event: AutoCompleteSelectEvent) {
        console.log(event.value);
    }

    createNewTab() {
        const newTab: Tab = {
            createdAt: new Date(),
            totalPrice: 0,
            totalReceive: 0,
            customerId: null,
            staffId: null,
            orderDetails: []
        };
        this.tabs.update(items => [...items, newTab]);
        this.saveTabsToStorage();
    }

    loadTabsFromStorage() {
        const savedTabs = localStorage.getItem("pos_tabs");
        if (savedTabs === null) {
            this.defaultTab();
        }
    }

    saveTabsToStorage() {
        localStorage.setItem("pos_tabs", JSON.stringify(this.tabs()));
    }

    defaultTab() {
        const defaultTab: Tab = {
            createdAt: new Date(),
            totalPrice: 0,
            totalReceive: 0,
            customerId: null,
            staffId: null,
            orderDetails: []
        };
        this.tabs.set([defaultTab]);
        this.saveTabsToStorage();
    }

    chooseTab(index: number) {
        this.selectedTab.set(this.tabs()[index]);
        console.log(this.tabs()[index]);
    }

    deleteTab(index: number) {
        if (this.tabs().length <= 1) {
            this.tabs.update(items => {
                const newItems = [...items];
                newItems.splice(index, 1);
                return newItems;
            });
            this.defaultTab();
        } else {
            this.tabs.update(items => {
                const newItems = [...items];
                newItems.splice(index, 1);
                return newItems;
            });
            this.saveTabsToStorage();
        }
    }

    getProductQuantity(): number {
        return 0;
    }

    placeOrder() {

    }
}
