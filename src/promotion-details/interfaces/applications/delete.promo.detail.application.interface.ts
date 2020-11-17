import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";

export interface IDeletePromoDetailApplication {
    delete(id: string): Promise<{deleted: boolean}>
}