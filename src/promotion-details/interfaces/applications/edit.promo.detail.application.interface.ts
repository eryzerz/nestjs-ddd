import { PartialPromoDetail } from "src/promotion-details/domain/partial.promo.detail.domain";

export interface IEditPromoDetailApplication {
    edit(id: string, data: PartialPromoDetail): Promise<PartialPromoDetail>
}