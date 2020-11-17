import { Inject, Injectable } from "@nestjs/common";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { ICreatePromoDetailApplication } from "../interfaces/applications/create.promo.detail.application.interface";
import { IDeletePromoDetailApplication } from "../interfaces/applications/delete.promo.detail.application.interface";
import { ICreatePromoDetailService } from "../interfaces/services/create.promo.detail.service.interface";
import { IDeletePromoDetailService } from "../interfaces/services/delete.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Injectable()
export class DeletePromoDetailApplication implements IDeletePromoDetailApplication {
    constructor(
        @Inject(PROMODETAIL_TYPES.services.IDeletePromoDetailService) private promoDetailService: IDeletePromoDetailService
    ){}

    async delete(id: string): Promise<{deleted: boolean}> {
        return await this.promoDetailService.remove(id)
    }
}