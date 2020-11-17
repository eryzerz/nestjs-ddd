import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrdersDomain } from "../domain/order.domain";
import { Orders } from "../domain/order.entity";
import { PartialOrderWithoutPromoDomain } from "../domain/partial.order.without.promo.domain";
import { ICreateOrderService } from "../interfaces/services/create.order.service.interface";

@Injectable()
export class CreateOrderService implements ICreateOrderService {
    constructor(
        @InjectRepository(Orders) private orderRepository: Repository<Orders>
    ){}

    async create(detail: OrdersDomain | PartialOrderWithoutPromoDomain): Promise<OrdersDomain> {
        return this.orderRepository.save(detail)
    }
}