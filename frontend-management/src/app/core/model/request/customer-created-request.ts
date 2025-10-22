export interface CustomerCreatedRequest {
    code?: string | null;
    name: string;
    phoneNum?: string;
    dob?: Date;
    gender?: boolean;
    provinceCode?: number;
    communeCode?: number;
    address?: string;
    email?: string;
}