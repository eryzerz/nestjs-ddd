import { Inject, Injectable } from "@nestjs/common";
import { PromoDomain } from "../domain/promo.domain";
import { IGetPromoApplication } from "../interfaces/applications/get.promo.application.interface";
import { IGetPromoService } from "../interfaces/services/get.promo.service.interface";
import { PROMO_TYPES } from "../interfaces/types";

@Injectable()
export class GetPromoApplication implements IGetPromoApplication {

    constructor(
        @Inject(PROMO_TYPES.services.IGetPromoService) private promoService: IGetPromoService
    ){}

    async findOne(id: string): Promise<PromoDomain> {
        return await this.promoService.findOne(id)
    }
}