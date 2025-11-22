export interface CustomerFilterRequest {
    page: number;
    size: number;
    sortBy: string;
    isActive: boolean | null;
    searchKeyword: string | null;
}