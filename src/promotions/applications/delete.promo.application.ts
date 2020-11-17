import { Inject, Injectable } from "@nestjs/common";
import { PromoDomain } from "../domain/promo.domain";
import { IDeletePromoApplication } from "../interfaces/applications/delete.promo.application.interface";
import { IDeletePromoService } from "../interfaces/services/delete.promo.service.interface";
import { PROMO_TYPES } from "../interfaces/types";

@Injectable()
export class DeletePromoApplication implements IDeletePromoApplication {

    constructor(
        @Inject(PROMO_TYPES.services.IDeletePromoService) private promoService: IDeletePromoService
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        return await this.promoService.remove(id)
    }
}