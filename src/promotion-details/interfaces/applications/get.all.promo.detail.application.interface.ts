import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IGetAllPromoDetailApplication {
    findAll(): Promise<PromoDetailDomain[]>
}