import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface ICreatePromoApplication {
    create(data: PromoDomain): Promise<PromoDomain> 
}