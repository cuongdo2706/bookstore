export interface ProductCreatedRequest {
    name: string;
    quantity: number;
    price: number;
    publisherId: number;
    translator?: string;
    numOfPages?: number;
    publishedYear?: number;
    description?: string;
    authorIds: number[];
    categoryIds: number[];
}
