import {OrderDetailResponse} from "./order-detail-response.model";

export interface OrderResponse {
    code: string;
    orderAt: Date;
    deliveryFee: number;
    totalAmount: number;
    discount: number;
    amountDue: number;
    amountPaid: number;
    changeAmount: number;
    customerId: number;
    customerName: string;
    email: string;
    phoneNum: string;
    address: string;
    staffId: number;
    orderDetails: OrderDetailResponse[];
    note: string;
    paymentStatus: number;
    orderStatus: number;
    saleChannel: number;
    orderType: number;
}