import { PartialPromo } from "src/promotions/domain/partial.promo.domain";
import { PromoDomain } from "src/promotions/domain/promo.domain";

export interface IEditPromoService {
    update(id: string, data: PartialPromo): Promise<PromoDomain>
}