export interface OrderFilterRequest{
    page:number;
    size:number;
    sortBy:string;
    orderType:boolean|null;
    orderStatus:number[];
    orderCodeKeyword:string;
}