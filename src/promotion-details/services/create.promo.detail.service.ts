import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { PromotionDetails } from "../domain/promo.detail.entity";
import { ICreatePromoDetailService } from "../interfaces/services/create.promo.detail.service.interface";

@Injectable()
export class CreatePromoDetailService implements ICreatePromoDetailService {
    constructor(
        @InjectRepository(PromotionDetails) private promoDetailRepository: Repository<PromotionDetails>
    ){}

    async create(detail: PromoDetailDomain): Promise<PromoDetailDomain> {
        return this.promoDetailRepository.save(detail)
    }
}