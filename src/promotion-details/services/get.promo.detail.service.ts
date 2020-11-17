import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { PromotionDetails } from "../domain/promo.detail.entity";
import { IGetPromoDetailService } from "../interfaces/services/get.promo.detail.service.interface";

@Injectable()
export class GetPromoDetailService implements IGetPromoDetailService {
    constructor(
        @InjectRepository(PromotionDetails) private promoDetailRepository: Repository<PromotionDetails>
    ){}

    async getById(id: string): Promise<PromoDetailDomain> {
        try {
            const pd = await this.promoDetailRepository.findOne({promoDetailId: id})
            return pd
        } catch (err) {
            throw new NotFoundException('Promo Detail ID is invalid')
        }
    }
}