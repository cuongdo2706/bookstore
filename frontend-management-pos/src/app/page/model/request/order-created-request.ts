export interface OrderCreatedRequest {
    totalReceive: number;
    customerId: number;
    staffId: number;
    note: String;
    orderItems: {
        productId: number;
        quantity: number;
    }[];
}