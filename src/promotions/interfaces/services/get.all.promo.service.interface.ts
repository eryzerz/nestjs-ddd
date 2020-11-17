import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface IGetAllPromoService {
    findAll(): Promise<PromoDomain[]>
}