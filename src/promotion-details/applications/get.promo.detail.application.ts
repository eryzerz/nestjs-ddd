import { Inject, Injectable } from "@nestjs/common";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { IGetPromoDetailApplication } from "../interfaces/applications/get.promo.detail.application.interface";
import { IGetPromoDetailService } from "../interfaces/services/get.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Injectable()
export class GetPromoDetailApplication implements IGetPromoDetailApplication {
    constructor(
        @Inject(PROMODETAIL_TYPES.services.IGetPromoDetailService) private promoDetailService: IGetPromoDetailService
    ){}

    async get(id: string): Promise<PromoDetailDomain> {
        return await this.promoDetailService.getById(id)
    }
}