import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialPromo } from "../domain/partial.promo.domain";
import { PromoDomain } from "../domain/promo.domain";
import { Promotions } from "../domain/promo.entity";
import { IEditPromoService } from "../interfaces/services/edit.promo.service.interface";

@Injectable()
export class EditPromoService implements IEditPromoService {

    constructor(
        @InjectRepository(Promotions) private promoRepository: Repository<Promotions>
    ){}

    async update(id: string, data: PartialPromo): Promise<PromoDomain> {
        await this.promoRepository.update({promoId: id}, data)
        return await this.promoRepository.findOne({promoId: id})
    }
}