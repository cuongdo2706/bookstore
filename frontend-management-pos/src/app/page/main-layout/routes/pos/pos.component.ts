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
import {DecimalPipe, NgOptimizedImage} from "@angular/common";
import {v4 as uuidv4} from 'uuid';
import {InputText} from "primeng/inputtext";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {ApiResponse} from "../../../model/response/api-response";
import {CouponService} from "../../../service/coupon.service";
import {UserResponse} from "../../../model/response/user-response";
import {Toast} from "primeng/toast";
import {OrderCreatedRequest} from '../../../model/request/order-created-request';
import {CouponResponse} from "../../../model/response/coupon-response.model";
import {AuthService} from "../../../../core/auth/service/auth.service";
import {CustomerService} from "../../../service/customer.service";
import {CustomerResponse} from "../../../model/response/customer-response";
import {Paginator, PaginatorState} from "primeng/paginator";

interface Tab {
    tabId: string;
    formData: {
        amountPaid: number;
        couponId: number | null
        customerId: number | null;
        customer: UserResponse | null;
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
        NgOptimizedImage,
        Paginator,
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
    customers = signal<CustomerResponse[]>([]);
    private orderService = inject(OrderService);
    private authService = inject(AuthService);
    private productService = inject(ProductService);
    private couponService = inject(CouponService);
    private customerService = inject(CustomerService);
    private fb = inject(FormBuilder);
    private formMap = new Map<string, FormGroup>();
    coupon = signal<CouponResponse | null>(null);
    couponNotFoundError = signal<string | null>(null);
    orderDetailsValues = signal<any[]>([]);
    page: number = 1;
    size: number = 10;
    totalElements: number = 0;
    keyword = "";
    staffUsername: string = this.authService.getPayload().sub;

    get orderDetailsFormArray(): FormArray<FormGroup> {
        return this.posForm.get("orderDetails") as FormArray<FormGroup>;
    }

    ngOnInit() {
        this.loadDataFromLocalStorage();
        this.orderDetailsFormArray.valueChanges.subscribe(values => {
            this.orderDetailsValues.set(values);
        });
    }

    async findCouponById(value: string) {
        setTimeout(async () => {
            if (value != "") {
                const result = await firstValueFrom(this.couponService.findCouponByCode(value));
                this.coupon.set(result.data === undefined ? null : result.data);
                this.couponNotFoundError.set(this.coupon() === null ? "Coupon không hợp lệ" : null);
            }
        }, 500);
        this.couponNotFoundError.set(null);
    }

    searchProduct(event: AutoCompleteCompleteEvent) {
        this.keyword = event.query;
        this.productService.searchProducts({
            page: 1,
            size: 10,
            nameOrCodeKeyword: this.keyword,
            sortBy: "name",
            isActive: true
        })
            .subscribe({
                next: res => {
                    this.products.set(res.data.content);
                    this.totalElements = res.data.totalElements;
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
                couponId: null,
                customerId: null,
                customer: null,
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
                couponId: null,
                customerId: null,
                customer: null,
                orderDetails: this.fb.array([])
            });
            this.formMap.set(this.activeTabId(), this.posForm);
            const newTab: Tab = {
                tabId: tabId,
                formData: {
                    amountPaid: 0,
                    couponId: null,
                    customerId: null,
                    customer: null,
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
            couponId: null,
            customerId: null,
            customer: null,
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

        item.get('quantity')?.patchValue(quantity + 1);

        this.formMap.set(this.activeTabId(), this.posForm);
        this.updateTabs(item);
    }

    async decreaseItemQuantity(item: FormGroup) {
        let quantity = item.get('quantity')?.value;
        if (quantity > 1) {
            item.get('quantity')?.patchValue(quantity - 1);
            this.updateTabs(item);
        }
        this.formMap.set(this.activeTabId(), this.posForm);
    }

    checkEmptyItemQuantity(event: Event, item: FormGroup) {
        let value = (event.target as HTMLInputElement).value;
        if (!value || value === "") {
            item.get('quantity')?.patchValue(1);
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
        if (this.coupon() === null) {
            return 0;
        }
        if (this.coupon()?.promotionType === "FIXED") {
            return this.coupon()?.promotionValue!;
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
        this.customerService.searchCustomer(0, 10, event.query, "created-at-desc").subscribe({
            next: res => {
                this.customers.set(res.data.content);
            }
        });
    }

    selectCustomer(event: AutoCompleteSelectEvent) {
        let customer: UserResponse = event.value;
        this.posForm.get('customerId')?.patchValue(customer.id);
        this.posForm.get('customer')?.patchValue(customer);
        this.formMap.set(this.activeTabId(), this.posForm);
        this.tabs.update(tabs => {
            let newTabs = tabs;
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId())!;
            tab.formData.customerId = customer.id;
            tab.formData.customer = customer;
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
    }

    clearCustomer() {
        this.posForm.get('customerId')?.patchValue(null);
        this.posForm.get('customer')?.patchValue(null);
        this.formMap.set(this.activeTabId(), this.posForm);
        this.tabs.update(tabs => {
            let newTabs = tabs;
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId())!;
            tab.formData.customerId = null;
            tab.formData.customer = null;
            return newTabs;
        });
        this.saveTabsToLocalStorage(this.tabs());
    }

    itemInfoIsChanged = async (): Promise<boolean> => {
        let isChanged = false;
        let tab = this.tabs().find(tabs => tabs.tabId === this.activeTabId());
        let ids = tab!.formData.orderDetails.map(orderDetail => orderDetail.bookId);
        let products: ProductResponse[] = [];
        console.log(ids);
        if (ids.length < 1) {
            return isChanged;
        }
        products = (await lastValueFrom(this.productService.findAllProductById(ids))).data;
        console.log(products);

        this.tabs.update(tabs => {
            let newTabs = [...tabs];
            let tab = newTabs.find(tab => tab.tabId === this.activeTabId());
            let orderDetail = tab!.formData.orderDetails;
            tab!.formData.orderDetails = tab!.formData.orderDetails.filter(orderDetail => {
                let product = products.find(product =>
                    product.id === orderDetail.bookId
                    && product.isActive
                    && product.quantity > 0);
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

            let newOrder: OrderCreatedRequest = {
                amountPaid: value.amountPaid,
                couponId: value.couponId,
                customerId: value.customerId,
                staffUsername: this.staffUsername,
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
            this.orderService.placeOrderOffline(newOrder).subscribe({
                next: res => {
                    this.deleteTab(this.activeTabId());
                    this.messageService.add({
                        severity: "success",
                        summary: "Ổn",
                        detail: res.message
                    });
                },
                error: err => {
                    this.messageService.add({
                        severity: "danger",
                        summary: "Lỗi",
                        detail: err
                    });
                }
            });
        }
    };


    onProductPageChange(event: PaginatorState) {
        this.productService.searchProducts({
            page: event.page!,
            size: event.rows!,
            nameOrCodeKeyword: this.keyword,
            sortBy: "name",
            isActive: true
        }).subscribe({
                next: res => {
                    this.products.set(res.data.content);
                    this.totalElements = res.data.totalElements;
                }
            }
        );
    }


}
