export interface OrderOfflineRequest {
    amountPaid: number;
    couponId: number | null;
    customerId: number | null;
    staffUsername: string;
    paymentMethod: number;
    orderType: number;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];
}