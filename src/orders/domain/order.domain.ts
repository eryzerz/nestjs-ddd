import { Contains, IsBoolean, IsDecimal, IsNumber, IsString, IsUUID } from "class-validator";

export class OrdersDomain {

    // @IsUUID()
    @IsString()
    promoDetailId: string = ""

    @IsUUID()
    readonly userId: string

    @IsUUID()
    productId: string

    @IsNumber()
    readonly qty: number

    @IsNumber()
    productPrice: number = 0

    @IsDecimal()
    disc: string = "0"

    @IsNumber()
    total: number = 0

}