export interface CustomerResponse {
    id: number;
    code: string;
    name: string;
    dob: Date;
    gender: boolean;
    phoneNum: string;
    address: string;
    email: string;
    imgUrl: string;
    isActive: boolean;
}