import { Inject, Injectable } from "@nestjs/common";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { ICreatePromoDetailApplication } from "../interfaces/applications/create.promo.detail.application.interface";
import { ICreatePromoDetailService } from "../interfaces/services/create.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Injectable()
export class CreatePromoDetailApplication implements ICreatePromoDetailApplication {
    constructor(
        @Inject(PROMODETAIL_TYPES.services.ICreatePromoDetailService) private promoDetailService: ICreatePromoDetailService
    ){}

    async create(detail: PromoDetailDomain): Promise<PromoDetailDomain> {
        return await this.promoDetailService.create(detail)
    }
}