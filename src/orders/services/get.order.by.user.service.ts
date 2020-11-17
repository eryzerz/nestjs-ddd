import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrdersDomain } from "../domain/order.domain";
import { Orders } from "../domain/order.entity";
import { IGetOrderByUserService } from "../interfaces/services/get.order.by.user.service.interface";

@Injectable()
export class GetOrderByUserService implements IGetOrderByUserService {
    constructor(
        @InjectRepository(Orders) private orderRepository: Repository<Orders>
    ) {}

    async getByUser(id: string): Promise<OrdersDomain[]> {
        return await this.orderRepository.find({userId: id})
    }
}