import {OrderDetailResponse} from "./order-detail-response.model";
import {CustomerResponse} from "./customer-response";
import {StaffResponse} from "./staff-response";

export interface OrderResponse {
    id:number;
    code: string;
    expiredAt:Date;
    orderedAt: Date;
    processedAt:Date;
    shippedAt:Date;
    deliveredAt:Date;
    cancelledAt:Date;
    completedAt:Date;
    deliveryFee: number;
    subTotal: number;
    discount: number;
    grandTotal: number;
    amountPaid: number;
    changeAmount: number;
    customer:CustomerResponse|null;
    customerName:string|null;
    email: string|null;
    phoneNum: string|null;
    address: string|null;
    staff: StaffResponse;
    orderDetails: OrderDetailResponse[];
    note: string;
    paymentStatus: number;
    orderStatus: number;
    saleChannel: number;
    orderType: number;
    returnStatus:number;
}