export interface OrderCreatedRequest {
    amountPaid: number;
    couponId: number | null;
    customerId: number | null;
    staffUsername: string;
    paymentMethod: number;
    orderType: number;
    customerName?: string;
    email?: string;
    phoneNum?: string;
    address?: string;
    orderItems: {
        productId: number;
        quantity: number;
        price: number;
    }[];
}