import { Inject, Injectable } from "@nestjs/common";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { IGetAllPromoDetailApplication } from "../interfaces/applications/get.all.promo.detail.application.interface";
import { IGetAllPromoDetailService } from "../interfaces/services/get.all.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Injectable()
export class GetAllPromoDetailApplication implements IGetAllPromoDetailApplication {
    constructor(
        @Inject(PROMODETAIL_TYPES.services.IGetAllPromoDetailService) private promoDetailService: IGetAllPromoDetailService
    ){}

    async findAll(): Promise<PromoDetailDomain[]> {
        return await this.promoDetailService.getAll()
    }
}