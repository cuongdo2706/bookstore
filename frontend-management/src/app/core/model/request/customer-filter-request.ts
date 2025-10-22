export interface CustomerFilterRequest {
    page: number;
    size: number;
    sortBy: string;
    isActive: boolean;
    searchKeyword: string | null;
}