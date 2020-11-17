import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Promotions } from "../domain/promo.entity";
import { IDeletePromoService } from "../interfaces/services/delete.promo.service.interface";

@Injectable()
export class DeletePromoService implements IDeletePromoService {

    constructor(
        @InjectRepository(Promotions) private promoRepository: Repository<Promotions>
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        await this.promoRepository.delete({promoId: id})
        return {deleted: true}
    }
}