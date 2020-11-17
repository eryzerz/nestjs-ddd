import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IDeletePromoDetailService {
    remove(id: string): Promise<{deleted: boolean}>
}