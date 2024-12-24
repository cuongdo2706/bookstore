import {Component, inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {InputText} from "primeng/inputtext";
import {FormBuilder, FormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {SplitButton} from "primeng/splitbutton";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {Card} from "primeng/card";
import {InputNumber} from "primeng/inputnumber";

interface Tab {
    createdAt: Date;
    totalPrice: number;
    totalReceive: number;
    customerId: number|null;
    staffId: number|null;
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
        IconField,
        InputIcon,
        Card,
        InputText,
        InputNumber,
    ],
    templateUrl: './pos.component.html',
    styleUrl: './pos.component.css',
    providers: [MessageService],
    encapsulation:ViewEncapsulation.None
})

export class PosComponent implements OnInit {
    ngOnInit(): void {
        this.loadTabsFromStorage();
        if (this.tabs.length === 0) {
            this.defaultTab();
        }
    }

    private fb = inject(FormBuilder);
    test = signal<string[]>(["Hoá đơn 1"]);
    messageService = inject(MessageService);
    activeTabIndex: number = 0;
    readonly MAX_TABS: number = 5;
    tabs = signal<Tab[]>(JSON.parse(<string>localStorage.getItem("pos_tabs")) || {});

    deleteTab(index: number) {
        this.test.update(items => {
            const newItems = [...items];
            newItems.splice(index, 1);
            return newItems;
        });
    }

    createNewTab() {

        // const newTab: PosTab = {
        //     active: true,
        //     items: [],
        //     total: 0,
        // };
        const newTab: string = "Hoá đơn N";
        this.test.update(items => [...items, newTab]);
        // console.log(this.tabs());
    }


    loadTabsFromStorage() {
        const savedTabs = localStorage.getItem("pos_tabs");
        if (savedTabs) {
            this.tabs.set(JSON.parse(savedTabs));
        }
    }

    saveTabsToStorage() {
        localStorage.setItem("pos_tabs", JSON.stringify(this.tabs()));
    }

    defaultTab() {
        const defaultTab: Tab = {
            createdAt:new Date(),
            totalPrice:0,
            totalReceive:0,
            customerId:null,
            staffId:null,
            orderDetails:[]
        };
        this.tabs.set([defaultTab])
        this.saveTabsToStorage();
    }

    chooseTab(index: number) {
        console.log(index);
    }

    getProductQuantity():number{
        return 0;
    }
}
