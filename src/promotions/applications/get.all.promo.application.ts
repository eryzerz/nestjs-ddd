import { Inject, Injectable } from "@nestjs/common";
import { PromoDomain } from "../domain/promo.domain";
import { IGetAllPromoApplication } from "../interfaces/applications/get.all.promo.application.interface";
import { IGetAllPromoService } from "../interfaces/services/get.all.promo.service.interface";
import { PROMO_TYPES } from "../interfaces/types";

@Injectable()
export class GetAllPromoApplication implements IGetAllPromoApplication {

    constructor(
        @Inject(PROMO_TYPES.services.IGetAllPromoService) private promoService: IGetAllPromoService
    ){}

    async findAll(): Promise<PromoDomain[]> {
        return await this.promoService.findAll()
    }
}