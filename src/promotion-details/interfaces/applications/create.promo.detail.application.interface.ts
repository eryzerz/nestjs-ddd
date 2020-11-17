import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface ICreatePromoDetailApplication {
    create(detail: PromoDetailDomain): Promise<PromoDetailDomain>
}