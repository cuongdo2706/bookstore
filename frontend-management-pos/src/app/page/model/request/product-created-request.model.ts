export interface ProductCreatedRequest {
    name: string;
    quantity: number;
    price: number;
    publisher?: string;
    translator?: string;
    numOfPages?: number;
    publishedYear?: number;
    description?: string;
    authorId: number;
    categoryId: number;
}
