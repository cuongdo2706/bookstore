export interface OrderOfflineResponse {
    code: string;
    orderAt: Date;
    totalPrice: number;
    totalReceive: number;
    customer: string | null;
    staff: string;
    orderDetails: any[];
    orderType: string;
    note:string;
}