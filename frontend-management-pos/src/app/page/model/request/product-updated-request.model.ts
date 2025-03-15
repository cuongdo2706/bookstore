export interface ProductUpdatedRequest {
    name?: string;
    quantity?: number;
    price?: number;
    publisher?: string | null;
    translator?: string | null;
    numOfPages?: number | null;
    publishedYear?: number | null;
    description?: string | null;
    authorId?: number;
    categoryId?: number;
}