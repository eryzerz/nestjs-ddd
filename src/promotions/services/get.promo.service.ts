import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDomain } from "../domain/promo.domain";
import { Promotions } from "../domain/promo.entity";
import { IGetPromoService } from "../interfaces/services/get.promo.service.interface";

@Injectable()
export class GetPromoService implements IGetPromoService {

    constructor(
        @InjectRepository(Promotions) private promoRepository: Repository<Promotions>
    ){}

    async findOne(id: string): Promise<PromoDomain> {
        try {
            return await this.promoRepository.findOne(id)
        } catch {
            throw new NotFoundException('Promo ID is invalid')
        }
    }
}