import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface IGetPromoApplication {
    findOne(id: string): Promise<PromoDomain>
}