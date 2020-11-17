import { IsUUID } from "class-validator";
import { PromoDetailDomain } from "./promo.detail.domain";


export class PartialPromoDetail implements Partial<PromoDetailDomain> {

    @IsUUID()
    readonly promoId: string

    @IsUUID()
    readonly productId: string

}