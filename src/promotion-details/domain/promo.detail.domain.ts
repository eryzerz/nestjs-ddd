import { IsUUID } from "class-validator";


export class PromoDetailDomain {

    @IsUUID()
    readonly promoId: string

    @IsUUID()
    readonly productId: string

}