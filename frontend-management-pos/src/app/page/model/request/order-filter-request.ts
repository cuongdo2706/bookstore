export interface OrderFilterRequest{
    page:number;
    size:number;
    sortBy:string;
    orderType:number[];
    orderStatus:number[];
    orderCodeKeyword:string;
}