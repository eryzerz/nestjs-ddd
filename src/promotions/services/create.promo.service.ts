import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDomain } from "../domain/promo.domain";
import { Promotions } from "../domain/promo.entity";
import { ICreatePromoService } from "../interfaces/services/create.promo.service.interface";

@Injectable()
export class CreatePromoService implements ICreatePromoService {

    constructor(
        @InjectRepository(Promotions) private promoRepository: Repository<Promotions>
    ){}

    async create(data: PromoDomain): Promise<PromoDomain> {
        return this.promoRepository.save(data)
    }
}