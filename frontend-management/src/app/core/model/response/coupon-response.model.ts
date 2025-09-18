export interface CouponResponse {
    id: number,
    code: string,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    couponType: string,
    couponValue: number,
    minAmount: number,
    maxDiscount: number,
    quantity: number,
    usedCount: number,
    isActive: boolean,
    isDeleted: boolean
}