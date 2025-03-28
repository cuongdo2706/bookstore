export interface OrderCreatedRequest {
    amountPaid: number;
    couponId: number | null;
    customerId: number | null;
    staffUsername: string;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];
}