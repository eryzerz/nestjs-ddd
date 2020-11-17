import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IGetAllPromoDetailService {
    getAll(): Promise<PromoDetailDomain[]>
}