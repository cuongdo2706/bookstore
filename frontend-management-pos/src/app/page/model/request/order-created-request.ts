export interface OrderCreatedRequest {
    amountPaid: number;
    couponId: number | null;
    customerId: number | null;
    staffId: number;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];
}