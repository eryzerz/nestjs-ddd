import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PromoDomain } from "../domain/promo.domain";
import { Promotions } from "../domain/promo.entity";
import { IGetAllPromoService } from "../interfaces/services/get.all.promo.service.interface";

@Injectable()
export class GetAllPromoService implements IGetAllPromoService {

    constructor(
        @InjectRepository(Promotions) private promoRepository: Repository<Promotions>
    ){}

    async findAll(): Promise<PromoDomain[]> {
        return await this.promoRepository.find()
    }
}