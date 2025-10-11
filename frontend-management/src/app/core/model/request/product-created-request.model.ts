export interface ProductCreatedRequest {
    code: string|null;
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
