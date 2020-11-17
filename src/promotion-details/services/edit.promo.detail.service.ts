import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialPromoDetail } from "../domain/partial.promo.detail.domain";
import { PromotionDetails } from "../domain/promo.detail.entity";
import { IEditPromoDetailService } from "../interfaces/services/edit.promo.detail.service.interface";

@Injectable()
export class EditPromoDetailService implements IEditPromoDetailService {
    constructor(
        @InjectRepository(PromotionDetails) private promoDetailRepository: Repository<PromotionDetails>
    ){}

    async update(id: string, detail: PartialPromoDetail): Promise<PartialPromoDetail> {
        await this.promoDetailRepository.update({promoDetailId: id}, detail)

        return await this.promoDetailRepository.findOne({promoDetailId: id})
    }
}