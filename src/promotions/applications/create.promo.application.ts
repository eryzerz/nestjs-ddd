import { Inject, Injectable } from "@nestjs/common";
import { PromoDomain } from "../domain/promo.domain";
import { ICreatePromoApplication } from "../interfaces/applications/create.promo.application.interface";
import { ICreatePromoService } from "../interfaces/services/create.promo.service.interface";
import { PROMO_TYPES } from "../interfaces/types";

@Injectable()
export class CreatePromoApplication implements ICreatePromoApplication {

    constructor(
        @Inject(PROMO_TYPES.services.ICreatePromoService) private promoService: ICreatePromoService
    ){}

    async create(data: PromoDomain): Promise<PromoDomain> {
        return await this.promoService.create(data)
    }
}