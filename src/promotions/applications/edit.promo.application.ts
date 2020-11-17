import { Inject, Injectable } from "@nestjs/common";
import { PartialPromo } from "../domain/partial.promo.domain";
import { PromoDomain } from "../domain/promo.domain";
import { IEditPromoApplication } from "../interfaces/applications/edit.promo.application.interface";
import { IEditPromoService } from "../interfaces/services/edit.promo.service.interface";
import { PROMO_TYPES } from "../interfaces/types";

@Injectable()
export class EditPromoApplication implements IEditPromoApplication {

    constructor(
        @Inject(PROMO_TYPES.services.IEditPromoService) private promoService: IEditPromoService
    ){}

    async update(id: string, data: PartialPromo): Promise<PromoDomain> {
        return await this.promoService.update(id, data)
    }
}