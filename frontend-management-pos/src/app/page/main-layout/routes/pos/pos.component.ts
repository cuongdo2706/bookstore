import {Component, computed, inject, OnInit, Signal, signal, ViewEncapsulation} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {CardModule} from "primeng/card";
import {MessageService} from "primeng/api";
import {Button, ButtonDirective} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormsModule} from "@angular/forms";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";

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
        TabViewModule,
        CardModule,
        Button,
        InputTextModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        SplitButtonModule,
        InputNumberModule,
        DropdownModule
    ],
    templateUrl: './pos.component.html',
    styleUrl: './pos.component.css',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    providers: [MessageService]

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
