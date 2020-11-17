import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface IGetPromoService {
    findOne(id: string): Promise<PromoDomain>
}