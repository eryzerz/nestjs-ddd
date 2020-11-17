import { PartialPromoDetail } from "src/promotion-details/domain/partial.promo.detail.domain";

export interface IEditPromoDetailService {
    update(id: string, data: PartialPromoDetail): Promise<PartialPromoDetail>
}