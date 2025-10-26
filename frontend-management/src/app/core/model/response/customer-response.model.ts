export interface CustomerResponse {
    id: number;
    code: string;
    name: string;
    dob: Date;
    gender: boolean;
    phoneNum: string;
    email: string;
    province:{
        code:string,
        name:string
    }
    commune:{
        code:string,
        name:string
    }
    address: string;
    imgUrl: string;
    isActive: boolean;
    createdAt:Date;
    updatedAt:Date
}