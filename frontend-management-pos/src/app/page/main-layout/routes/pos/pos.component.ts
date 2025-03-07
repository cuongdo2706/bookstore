import {Component, computed, inject, linkedSignal, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MessageService} from "primeng/api";
import {Button} from "primeng/button";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Card} from "primeng/card";
import {InputNumber, InputNumberInputEvent} from "primeng/inputnumber";
import {OrderService} from "../../../service/order.service";
import {ProductService} from "../../../service/product.service";
import {AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent} from "primeng/autocomplete";
import {ProductResponse} from "../../../model/response/product-response.model";
import {DecimalPipe} from "@angular/common";
import {v4 as uuidv4} from 'uuid';
import {InputText} from "primeng/inputtext";
import {firstValueFrom} from "rxjs";
import {ApiResponse} from "../../../model/response/api-response";
import {VoucherService} from "../../../service/voucher.service";
import {VoucherResponse} from "../../../model/response/voucher-response.model";
import {UserService} from "../../../service/user.service";
import {UserResponse} from "../../../model/response/user-response";
import {Toast} from "primeng/toast";
import {OrderCreatedRequest} from '../../../model/request/order-created-request';

interface Tab {
    tabId: string;
    formData: {
        amountPaid: number;
        voucherId: number | null
        customerId: number | null;
        // customer: UserResponse | null
        staffId: number | null;
        orderDetails: OrderDetail[];
    };
}

interface OrderDetail {
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
        Card,
        InputNumber,
        ReactiveFormsModule,
        AutoComplete,
        DecimalPipe,
        InputText,
        Toast,
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
    customers = signal<UserResponse[]>([]);
    private orderService = inject(OrderService);
    private productService = inject(ProductService);
    private voucherService = inject(VoucherService);
    private userService = inject(UserService);
    private fb = inject(FormBuilder);
    private formMap = new Map<string, FormGroup>();
    voucher = signal<VoucherResponse | null>(null);
    voucherNotFoundError = signal<string | null>(null);
    orderDetailsValues = signal<any[]>([]);

    get orderDetailsFormArray(): FormArray<FormGroup> {
        return this.posForm.get("orderDetails") as FormArray<FormGroup>;
    }

    ngOnInit() {
        this.loadDataFromLocalStorage();
        this.orderDetailsFormArray.valueChanges.subscribe(values => {
            this.orderDetailsValues.set(values);
        });
    }

    async findVoucherById(value: string) {
        setTimeout(async () => {
            if (value != "") {
                const result = await firstValueFrom(this.voucherService.findVoucherByCode(value));
                this.voucher.set(result.data === undefined ? null : result.data);
                this.voucherNotFoundError.set(this.voucher() === null ? "Voucher không hợp lệ" : null);
            }
        }, 500);
        this.voucherNotFoundError.set(null);
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

// THỨ TỰ LOAD DATA: LOCAL STORAGE -> SIGNAL ARRAY -> FORM MAP -> FORM
    loadDataFromLocalStorage() {
        //Lấy data từ LS
        const savedTabs = localStorage.getItem("pos_tabs");
        if (savedTabs !== null) {
            //Parse data từ LS về type Tab[]
            const parseData: Tab[] = JSON.parse(savedTabs);
            if (parseData.length < 1) {
                this.createNewTab();
            } else {
                this.tabs.set(parseData);
                this.loadDataFromSignalToFormMap();
                if (this.getActiveTabIdFromLocalStorage() !== null) {
                    this.activeTabId.set(<string>this.getActiveTabIdFromLocalStorage());
                } else {
                    this.activeTabId.set(parseData[0].tabId);
                    this.saveActiveTabIdToLocalStorage(this.activeTabId());
                }
                this.loadDataFromFormMapToForm(this.activeTabId());
            }

        } else {
            this.createNewTab();
        }
    }

    loadDataFromSignalToFormMap() {
        //Duyệt mảng để gán value cho form
        this.tabs().forEach(item => {
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
    }

    loadDataFromFormMapToForm(tabId: string) {
        this.posForm = this.formMap.get(tabId)!;
    }

    createNewTab() {
        const tabId = uuidv4();
        const form = this.createForm();
        this.formMap.set(tabId, form);
        const newTab: Tab = {
            tabId: tabId,
            formData: {
                amountPaid: 0,
                voucherId: null,
                customerId: null,
                staffId: null,
                orderDetails: [],
            }
        };
        this.tabs.update(tabs => [...tabs, newTab]);
        this.chooseTab(tabId);
        this.saveTabsToLocalStorage(this.tabs());
    }

    chooseTab(tabId: string) {
        this.activeTabId.set(tabId);
        this.posForm = this.getForm(tabId);
        this.saveActiveTabIdToLocalStorage(tabId);
        this.orderDetailsValues.set(this.posForm.get('orderDetails')?.value || []);

        // Subscribe để theo dõi thay đổi của tab mới
        this.posForm.get('orderDetails')?.valueChanges.subscribe(values => {
            this.orderDetailsValues.set(values);
        });
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
                amountPaid: 0,
                voucherId: null,
                customerId: null,
                staffId: null,
                orderDetails: this.fb.array([])
            });
            this.formMap.set(this.activeTabId(), this.posForm);
            const newTab: Tab = {
                tabId: tabId,
                formData: {
                    amountPaid: 0,
                    voucherId: null,
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
            console.log(quantity);
            orderDetailsFormArray.controls[existedProductIndex].get('quantity')?.patchValue(quantity + 1);
            console.log(orderDetailsFormArray.controls[existedProductIndex].get('quantity')?.value);
            this.tabs.update(tabs => {
                let newTabs = tabs;
                newTabs!.find(tab => tab.tabId === this.activeTabId())!.formData.orderDetails[existedProductIndex].quantity += 1;
                return newTabs;
            });
        } else {
            const newItem = this.fb.group({
                bookId: selectedProduct.id,
                bookCode: selectedProduct.code,
                bookName: selectedProduct.name,
                quantity: 1,
                price: selectedProduct.price,
                totalPrice: selectedProduct.price
            });
            orderDetailsFormArray.insert(0, newItem);
            this.tabs.update(tabs => {
                const newOrderDetail: OrderDetail = {
                    bookId: selectedProduct.id,
                    bookCode: selectedProduct.code,
                    bookName: selectedProduct.name,
                    quantity: 1,
                    price: selectedProduct.price,
                };
                let newTabs = tabs;
                newTabs!.find(tab => tab.tabId === this.activeTabId())?.formData.orderDetails.unshift(newOrderDetail);
                return newTabs;
            });

        }
        this.saveTabsToLocalStorage(this.tabs());
    }


    private createForm(): FormGroup {
        return this.fb.group({
            amountPaid: 0,
            voucherId: null,
            customerId: null,
            staffId: null,
            orderDetails: this.fb.array([])
        });
    }

    private createItemFormArray(item: OrderDetail): FormGroup {
        return this.fb.group({
            bookId: item.bookId,
            bookCode: item.bookCode,
            bookName: item.bookName,
            quantity: item.quantity,
            price: item.price,
            totalPrice: item.price * item.quantity
        });
    }

    removeItem(index: number, id: number) {
        this.orderDetailsFormArray.removeAt(index);
        this.formMap.set(this.activeTabId(), this.posForm);
        this.tabs.update(tabs => {
            let newTabs = tabs;
            let selectedTab = newTabs.find(tab => tab.tabId === this.activeTabId())!;
            selectedTab.formData.orderDetails = selectedTab.formData.orderDetails.filter(item => item.bookId != id);
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
    }

    updateTabs(item: FormGroup) {
        this.tabs.update(tabs => {
            let newTabs = tabs;
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId());
            let orderDetail = tab?.formData.orderDetails.find(orderDetail => orderDetail.bookId === item.get("bookId")?.value);
            orderDetail!.quantity = item.get("quantity")?.value;
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
    }

    async increaseItemQuantity(item: FormGroup) {
        let quantity = item.get('quantity')?.value;
        const stockQuantity = await this.getStockQuantity(item.get('bookId')?.value);
        if ((stockQuantity < 50 && quantity < stockQuantity)) {
            item.get('quantity')?.patchValue(quantity + 1);
        }
        if ((quantity < 50 && stockQuantity > 50)) {
            item.get('quantity')?.patchValue(quantity + 1);
        }
        this.formMap.set(this.activeTabId(), this.posForm);
        this.updateTabs(item);
    }

    async decreaseItemQuantity(item: FormGroup, index: number) {
        let quantity = item.get('quantity')?.value;
        const stockQuantity = await this.getStockQuantity(item.get('bookId')?.value);
        if (quantity > stockQuantity) {
            item.get('quantity')?.patchValue(stockQuantity);
            this.updateTabs(item);
        }
        if (quantity > 1) {
            item.get('quantity')?.patchValue(quantity - 1);
            this.updateTabs(item);
        }
        this.formMap.set(this.activeTabId(), this.posForm);

    }

    async checkEmptyItemQuantity(item: FormGroup) {
        let quantity = item.get('quantity')?.value;
        const stockQuantity = await this.getStockQuantity(item.get('bookId')?.value);
        if (!quantity || quantity === "") {
            item.get('quantity')?.patchValue(1);
        }
        if (quantity > 50) {
            item.get('quantity')?.patchValue(stockQuantity > 50 ? 50 : stockQuantity);
        }
        if (quantity > stockQuantity) {
            item.get('quantity')?.patchValue(stockQuantity);
        }
        this.formMap.set(this.activeTabId(), this.posForm);
        this.updateTabs(item);
    }


    calculateItemTotalPrice(item: FormGroup): number {

        const quantity = item.get('quantity')?.value;
        const price = item.get('price')?.value;
        item.get('totalPrice')?.patchValue(quantity * price);
        return quantity * price;
    }

    totalAmount = computed(() => {
        this.orderDetailsValues();
        return this.orderDetailsFormArray.controls.reduce((sum, item) =>
            sum + (item.get('totalPrice')?.value), 0
        );
    });

    discount = computed(() => {
        if (this.voucher() === null) {
            return 0;
        }
        if (this.voucher()?.promotionType === "FIXED") {
            return this.voucher()?.promotionValue!;
        }
        return 0;
    });
    amountDue = linkedSignal({
        source: () => ({
            totalAmount: this.totalAmount,
            discount: this.discount
        }),
        computation: (source) => source.totalAmount() - source.discount()
    });

    validateAmountPaid() {
        if (this.posForm.get('amountPaid')?.value < this.amountDue()) {
            this.amountPaid.set(this.amountDue());
            this.posForm.get('amountPaid')?.patchValue(this.amountDue());
        }
    }

    amountPaid = linkedSignal({
        source: () => this.amountDue,
        computation: (source) => {
            this.posForm.get('amountPaid')?.patchValue(source());
            return source();
        }
    });

    changeAmount = linkedSignal({
        source: () => ({
            amountPaid: this.amountPaid,
            amountDue: this.amountDue
        }),
        computation: (source) => source.amountPaid() - source.amountDue()
    });

    fillAmountPaid(event: InputNumberInputEvent) {
        this.amountPaid.set(event.value as number);
        this.posForm.get('amountPaid')?.patchValue(event.value);
    }

    async getStockQuantity(id: number): Promise<number> {
        let response: ApiResponse<number> = await firstValueFrom(this.productService.getProductStock(id));
        return response.data;
    }

    searchCustomer(event: AutoCompleteCompleteEvent) {
        this.userService.searchCustomer(0, 10, event.query, "created-at-desc").subscribe({
            next: res => {
                this.customers.set(res.data.content);
            }
        });
    }

    // selectCustomer(event: AutoCompleteSelectEvent) {
    //     let customer: UserResponse = event.value;
    //     this.posForm.get('customerId')?.patchValue(customer.id);
    //     this.formMap.set(this.activeTabId(), this.posForm);
    //     this.tabs.update(tabs => {
    //         let newTabs = tabs;
    //         let tab = newTabs.find(tab => tab.tabId === this.activeTabId());
    //         tab!.formData.customerId = customer.id;
    //         return newTabs;
    //     });
    //     this.saveTabsToLocalStorage(this.tabs());
    // }

    clearCustomer() {
        this.posForm.get('customerId')?.patchValue(null);
        this.formMap.set(this.activeTabId(), this.posForm);
        this.tabs.update(tabs => {
            let newTabs = tabs;
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId());
            tab!.formData.customerId = null;
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
    }

    itemInfoIsChanged = async (): Promise<boolean> => {
        let isChanged = false;
        let tab = this.tabs().find(tabs => tabs.tabId === this.activeTabId());
        let ids = tab!.formData.orderDetails.map(orderDetail => orderDetail.bookId);
        let products: ProductResponse[] = [];
        if (ids.length < 1) {
            return isChanged;
        }
        products = (await firstValueFrom(this.productService.findAllProductById(ids))).data;

        this.tabs.update(tabs => {
            let newTabs = [...tabs];
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId());
            let orderDetail = tab!.formData.orderDetails;
            tab!.formData.orderDetails = tab!.formData.orderDetails.filter(orderDetail => {
                let product = products.find(product =>
                    product.id === orderDetail.bookId
                    && product.isActive
                    && !product.isDeleted);
                if (product === undefined) isChanged = true;
                return product !== undefined;
            });
            if (isChanged) return newTabs;
            orderDetail.forEach(orderDetail => {
                let product = products.find(product => product.id === orderDetail.bookId)!;
                if (orderDetail.price !== product.price) {
                    orderDetail.price = product.price;
                    isChanged = true;
                }
                if (orderDetail.quantity > product.quantity) {
                    orderDetail.quantity = product.quantity;
                    isChanged = true;
                }
            });
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
        // this.loadDataFromSignalToFormMap();
        // this.loadDataFromFormMapToForm(this.activeTabId());
        if (isChanged) {
            this.messageService.add({
                severity: "info",
                summary: "Cảnh báo",
                detail: "Có sự thay đổi về thông tin sản phẩm so với kho"
            });
        }
        return isChanged;
    };

    placeOrder = async (value: any) => {
        if (!await this.itemInfoIsChanged()) {
            this.messageService.add({
                severity: "success",
                summary: "Ổn",
                detail: "Ổn"
            });
            let newOrder: OrderCreatedRequest = {
                amountPaid: value.amountPaid,
                voucherId: value.voucherId,
                customerId: value.customerId,
                staffId: value.staffId,
                orderItems: []
            };
            value.orderDetails.forEach((item: { bookId: number; quantity: number; price: number; }) => {
                let newItem = {
                    productId: item.bookId,
                    quantity: item.quantity,
                    price: item.price
                };
                newOrder.orderItems.push(newItem);
            });
            console.log(newOrder);
        }
    };

}
