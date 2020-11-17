import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IGetPromoDetailApplication {
    get(id: string): Promise<PromoDetailDomain>
}