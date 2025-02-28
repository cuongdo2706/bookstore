export interface OrderCreatedRequest {
    amountPaid: number;
    voucherId: number | null;
    customerId: number | null;
    staffId: number;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];
}