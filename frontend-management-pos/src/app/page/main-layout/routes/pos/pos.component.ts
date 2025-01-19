import {Component, inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {Card} from "primeng/card";
import {InputNumber} from "primeng/inputnumber";
import {OrderService} from "../../../service/order.service";
import {ProductService} from "../../../service/product.service";
import {AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent} from "primeng/autocomplete";
import {ProductResponse} from "../../../model/response/product-response.model";
import {DecimalPipe} from "@angular/common";
import {v4 as uuidv4} from 'uuid';
import {InputText} from "primeng/inputtext";

interface Tab {
    tabId: string;
    formData: {
        amountPaid: number;
        customerId: number | null;
        staffId: number | null;
        orderDetails: OrderDetails[];
    };
}

interface OrderDetails {
    bookId: number;
    bookCode: string;
    bookName: string;
    quantity: number;
    price: number;
}

@Component({
    selector: 'app-pos',
    imports: [
        Button,
        FormsModule,
        Select,
        Card,
        InputNumber,
        ReactiveFormsModule,
        AutoComplete,
        DecimalPipe,
        InputText,
    ],
    templateUrl: './pos.component.html',
    styleUrl: './pos.component.css',
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})

export class PosComponent implements OnInit {
    posForm!: FormGroup;
    messageService = inject(MessageService);
    readonly MAX_TABS: number = 5;
    tabs = signal<Tab[]>([]);
    activeTabId = signal<string>("");
    products = signal<ProductResponse[]>([]);
    private orderService = inject(OrderService);
    private productService = inject(ProductService);
    private fb = inject(FormBuilder);
    private formMap = new Map<string, FormGroup>();

    get orderDetailsFormArray(): FormArray {
        return this.posForm.get("orderDetails") as FormArray;
    }

    ngOnInit() {
        this.loadDataFromLocalStorage();
    }

    searchProduct(event: AutoCompleteCompleteEvent) {
        this.productService.searchProducts(0, 10, event.query, "").subscribe({
            next: res => {
                this.products.set(res.data.content);
            }
        });
    }


    saveTabsToLocalStorage(tabs: Tab[]): void {
        localStorage.setItem("pos_tabs", JSON.stringify(tabs));
    }

    getForm(tabId: string): FormGroup {
        return this.formMap.get(tabId)!;
    }

    removeForm(tabId: string) {
        this.formMap.delete(tabId);
    }

    saveActiveTabIdToLocalStorage(tabId: string) {
        localStorage.setItem("active_tab_id", JSON.stringify(tabId));
    }

    getActiveTabIdFromLocalStorage(): string | null {
        const activeTabId = localStorage.getItem("active_tab_id");
        return activeTabId === null ? null : JSON.parse(activeTabId);
    }

    loadDataFromLocalStorage() {
        //Lấy data từ LS
        const savedTabs = localStorage.getItem("pos_tabs");
        if (savedTabs !== null) {
            //Parse data từ LS về type Tab[]
            const parseData: Tab[] = JSON.parse(savedTabs);
            if (parseData.length < 1) {
                this.createNewTab();
            } else {
                //Duyệt mảng để gán value cho form
                //ĐOẠN NÀY XỬ LÍ VIỆC GÁN VALUE CHO FORM
                parseData.forEach(item => {
                    //tạo form rỗng,(dùng hàm createForm)
                    const form = this.createForm();
                    //gán value của item vào form rỗng
                    form.patchValue(item.formData);
                    const orderDetails = form.get('orderDetails') as FormArray;
                    //duyệt orderDetail để gán value cho orderDetails của form
                    item.formData.orderDetails.forEach(orderDetail => {
                        orderDetails.push(this.createItemFormArray(orderDetail));
                    });
                    this.formMap.set(item.tabId, form);
                    return item;
                });
                this.tabs.set(parseData);
                if (this.getActiveTabIdFromLocalStorage() !== null) {
                    this.activeTabId.set(<string>this.getActiveTabIdFromLocalStorage());
                } else {
                    this.activeTabId.set(parseData[0].tabId);
                    this.saveActiveTabIdToLocalStorage(this.activeTabId());
                }
                this.posForm = this.formMap.get(this.activeTabId())!;
            }

        } else {
            this.createNewTab();
        }
    }

    createNewTab() {
        const tabId = uuidv4();
        const form = this.createForm();
        this.formMap.set(tabId, form);
        const newTab: Tab = {
            tabId: tabId,
            formData: {
                amountPaid: 0,
                customerId: null,
                staffId: null,
                orderDetails: [],
            }
        };
        this.tabs.update(tabs => [...tabs, newTab]);
        this.activeTabId.set(tabId);
        this.posForm = this.getForm(this.activeTabId());
        this.saveTabsToLocalStorage(this.tabs());
        this.saveActiveTabIdToLocalStorage(this.activeTabId());
    }

    chooseTab(tabId: string) {
        this.posForm = this.getForm(tabId);
        this.activeTabId.set(tabId);
        this.saveActiveTabIdToLocalStorage(tabId);
    }

    deleteTab(tabId: string) {
        if (this.tabs().length > 1) {
            if (tabId === this.activeTabId()) {
                const index = this.tabs().findIndex(tab => tab.tabId === tabId);
                const nextTabId: string =
                    index < this.tabs().length - 1 ?
                        this.tabs()[index + 1].tabId :
                        this.tabs()[index - 1].tabId;
                this.chooseTab(nextTabId);
            }
            this.tabs.update(tabs => tabs.filter(tab => tab.tabId !== tabId));
            this.removeForm(tabId);
            this.saveActiveTabIdToLocalStorage(this.activeTabId());
        } else {
            this.posForm.reset({
                totalAmount: 0,
                amountDue: 0,
                amountPaid: 0,
                changeAmount: 0,
                customerId: null,
                staffId: null,
                orderDetails: this.fb.array([])
            });
            this.formMap.set(this.activeTabId(), this.posForm);
            const newTab: Tab = {
                tabId: tabId,
                formData: {
                    amountPaid: 0,
                    customerId: null,
                    staffId: null,
                    orderDetails: [],
                }
            };
            this.tabs.set([newTab]);
            this.orderDetailsFormArray.clear();
        }
        this.saveTabsToLocalStorage(this.tabs());
    }

    selectProduct(event: AutoCompleteSelectEvent) {
        const selectedProduct: ProductResponse = event.value;
        const form = this.getForm(this.activeTabId());
        const orderDetailsFormArray = form.get('orderDetails') as FormArray;
        let existedProductIndex = -1;
        for (let i = 0; i < orderDetailsFormArray.length; i++) {
            if (orderDetailsFormArray.controls[i].get('bookCode')?.value === selectedProduct.code) {
                existedProductIndex = i;
                break;
            }
        }
        if (existedProductIndex !== -1) {
            let quantity = orderDetailsFormArray.controls[existedProductIndex].get('quantity')?.value;
            orderDetailsFormArray.controls[existedProductIndex].get('quantity')?.patchValue(quantity + 1);
            this.tabs.update(tabs => {
                const newTab = tabs;
                newTab.map(tab => {
                    if (tab.tabId === this.activeTabId()) {
                        tab.formData.orderDetails[existedProductIndex].quantity += 1;
                    }
                });
                return newTab;
            });
        } else {
            const newItem = this.fb.group({
                bookId: selectedProduct.id,
                bookCode: selectedProduct.code,
                bookName: selectedProduct.name,
                quantity: 1,
                price: selectedProduct.price,
            });
            orderDetailsFormArray.push(newItem);
            this.tabs.update(tabs => {
                const newOrderDetail: OrderDetails = {
                    bookId: selectedProduct.id,
                    bookCode: selectedProduct.code,
                    bookName: selectedProduct.name,
                    quantity: 1,
                    price: selectedProduct.price,
                };
                const newTabs = tabs;
                newTabs.map(tab => {
                    if (tab.tabId === this.activeTabId()) {
                        tab.formData.orderDetails.push(newOrderDetail);
                    }
                });
                return newTabs;
            });
        }
        this.saveTabsToLocalStorage(this.tabs());
    }


    private createForm(): FormGroup {
        return this.fb.group({
            totalAmount: 0,
            amountDue: 0,
            amountPaid: 0,
            changeAmount: 0,
            customerId: null,
            staffId: null,
            orderDetails: this.fb.array([])
        });
    }

    private createItemFormArray(item: OrderDetails): FormGroup {
        return this.fb.group({
            bookId: item.bookId,
            bookCode: item.bookCode,
            bookName: item.bookName,
            quantity: item.quantity,
            price: item.price,
        });
    }

    removeItem() {

    }

    calculateItemTotalPrice(item: AbstractControl): number {
        const quantity = item.get('quantity')?.value;
        const price = item.get('price')?.value;
        return quantity * price;
    }

    calculateTotalAmount(): number {
        let priceCount = 0;
        let item = this.orderDetailsFormArray.controls;
        for (let i = 0; i < this.orderDetailsFormArray.length; i++) {
            priceCount += this.calculateItemTotalPrice(item[i]);
        }
        return priceCount;
    }

    calculateAmountDue() {

    }

    isValidVoucher(){}

    placeOrder() {

    }
}
