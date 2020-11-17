import { Inject, Injectable } from "@nestjs/common";
import { PartialPromoDetail } from "../domain/partial.promo.detail.domain";
import { IEditPromoDetailApplication } from "../interfaces/applications/edit.promo.detail.application.interface";
import { IEditPromoDetailService } from "../interfaces/services/edit.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Injectable()
export class EditPromoDetailApplication implements IEditPromoDetailApplication {
    constructor(
        @Inject(PROMODETAIL_TYPES.services.IEditPromoDetailService) private promoDetailService: IEditPromoDetailService
    ){}

    async edit(id: string, detail: PartialPromoDetail): Promise<PartialPromoDetail> {
        return await this.promoDetailService.update(id, detail)
    }
}