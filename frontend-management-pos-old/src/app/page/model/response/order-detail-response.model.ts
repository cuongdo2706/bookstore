export interface OrderDetailResponse {
    id: number;
    productId: number;
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
    discount:number;
    totalPrice: number;
}