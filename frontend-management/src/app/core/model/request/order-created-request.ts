export interface OrderCreatedRequest {
    amountPaid: number;
    couponId: number | null;
    customerId: number | null;
    staffUsername: string;
    paymentMethod: number;
    orderType: number;
    deliveryInfo: {
        recipientName: string;
        phoneNum: string;
        address: string;
    } | null;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];

}