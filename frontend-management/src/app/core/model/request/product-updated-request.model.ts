export interface ProductUpdatedRequest {
    code: string;
    name: string;
    quantity?: number;
    price?: number;
    publisherId?: number | null;
    translator?: string | null;
    numOfPages?: number | null;
    publishedYear?: number | null;
    description?: string | null;
    authorIds?: number[];
    categoryIds?: number[];
}