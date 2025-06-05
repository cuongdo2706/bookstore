export interface OrderFilterRequest{
    page:number;
    size:number;
    sortBy:string;
    orderType:boolean;
    orderStatus:number[];
    orderCodeOrPhoneNumKeyword:string;
}