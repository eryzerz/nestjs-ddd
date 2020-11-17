import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface IGetAllPromoApplication {
    findAll(): Promise<PromoDomain[]>
}