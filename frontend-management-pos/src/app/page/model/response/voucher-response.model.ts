export interface VoucherResponse {
    id: number,
    code: string,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    promotionType: string,
    promotionValue: number,
    quantity: number,
    usedCount: number,
    isActive: boolean,
    isDeleted: boolean
}