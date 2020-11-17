import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IGetPromoDetailService {
    getById(id: string): Promise<PromoDetailDomain>
}