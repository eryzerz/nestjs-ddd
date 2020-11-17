import { IsBoolean, IsDecimal, IsNumber, IsUUID } from "class-validator"
import { OrdersDomain } from "./order.domain"

export class PartialOrderDomain implements Partial<OrdersDomain> {
    @IsUUID()
    promoDetailId: string

    @IsUUID()
    userId: string

    @IsUUID()
    productId: string

    @IsNumber()
    qty: number

}