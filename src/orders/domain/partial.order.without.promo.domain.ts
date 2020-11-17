import { IsBoolean, IsNumber, IsUUID } from "class-validator"
import { OrdersDomain } from "./order.domain"

export class PartialOrderWithoutPromoDomain implements Partial<OrdersDomain> {

    @IsUUID()
    userId: string

    @IsUUID()
    productId: string

    @IsNumber()
    qty: number

}