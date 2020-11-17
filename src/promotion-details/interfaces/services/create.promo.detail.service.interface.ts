import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface ICreatePromoDetailService {
    create(data: PromoDetailDomain): Promise<PromoDetailDomain>
}