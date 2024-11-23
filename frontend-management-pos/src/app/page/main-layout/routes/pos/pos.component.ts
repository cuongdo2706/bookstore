import {Component, computed, inject, OnInit, Signal, signal, ViewEncapsulation} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {CardModule} from "primeng/card";
import {MessageService} from "primeng/api";

export interface PosTab {
    id: number;
    title: string;
    active: boolean;
    items: any[];
    total: number;
}

@Component({
    selector: 'app-pos',
    imports: [
        TabViewModule,
        CardModule
    ],
    templateUrl: './pos.component.html',
    styleUrl: './pos.component.css',
    encapsulation: ViewEncapsulation.None,
    providers: [MessageService]
})

export class PosComponent implements OnInit {
    ngOnInit(): void {
        this.loadTabsFromStorage();
        if (this.tabs.length === 0) {
            this.defaultTab();
        }
    }

    messageService = inject(MessageService);
    activeTabIndex: number = 0;
    private readonly MAX_TABS: number = 5;
    tabs = signal<PosTab[]>([]);

    createNewTab() {

    }

    canAddNewTab: Signal<boolean> = computed(() =>
        this.tabs().length < this.MAX_TABS
    );

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
        const defaultTab: PosTab = {
            id: 1,
            title: "HĐ1",
            active: true,
            items: [],
            total: 100000
        };
        this.tabs.set([defaultTab]);
        this.saveTabsToStorage()
    }

}
