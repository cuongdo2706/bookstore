export interface OrderCreatedRequest {
    id: number;
    totalMoney: number;
    amountDiscount: number;
    amountPayable: number;
    amountPaid: number;
    customerId: number;
    staffId: number;
    orderDetail: any;
    createdAt: Date;
    paymentAt: Date;
}