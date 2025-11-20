export interface ProductFilterRequest {
    page: number;
    size: number;
    sortBy: string;
    nameOrCodeKeyword: string;
    isPublished: boolean;
    categoryIds: number[];
    authorIds: number[];
    publisherIds: number[];
}