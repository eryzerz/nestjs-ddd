import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromotionDetails } from "../domain/promo.detail.entity";
import { IDeletePromoDetailService } from "../interfaces/services/delete.promo.detail.service.interface";

@Injectable()
export class DeletePromoDetailService implements IDeletePromoDetailService {
    constructor(
        @InjectRepository(PromotionDetails) private promoDetailRepository: Repository<PromotionDetails>
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        await this.promoDetailRepository.delete({promoDetailId: id})
        return {deleted: true}
    }
}