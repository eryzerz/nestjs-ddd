import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { PromotionDetails } from "../domain/promo.detail.entity";
import { IGetAllPromoDetailService } from "../interfaces/services/get.all.promo.detail.service.interface";

@Injectable()
export class GetAllPromoDetailService implements IGetAllPromoDetailService {
    constructor(
        @InjectRepository(PromotionDetails) private promoDetailRepository: Repository<PromotionDetails>
    ){}

    async getAll(): Promise<PromoDetailDomain[]> {
        return await this.promoDetailRepository.find()
    }
}