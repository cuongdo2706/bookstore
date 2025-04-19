export interface ProductFilterRequest {
    page: number;
    size: number;
    sortBy: string;
    nameOrCodeKeyword: string;
    isActive: boolean;
}