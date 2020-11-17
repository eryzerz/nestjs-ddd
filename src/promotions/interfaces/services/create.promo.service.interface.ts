import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface ICreatePromoService {
    create(data: PromoDomain): Promise<PromoDomain>
}