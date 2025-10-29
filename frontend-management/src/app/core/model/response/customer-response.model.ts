import {ImageResponse} from "./image-response.model";

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
    image:ImageResponse|null;
    isActive: boolean;
    createdAt:Date;
    updatedAt:Date
}