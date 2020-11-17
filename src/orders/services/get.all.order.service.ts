import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrdersDomain } from "../domain/order.domain";
import { Orders } from "../domain/order.entity";
import { IGetAllOrderService } from "../interfaces/services/get.all.order.service.interface";

@Injectable()
export class GetAllOrderService implements IGetAllOrderService {
    constructor(
        @InjectRepository(Orders) private orderRepository: Repository<Orders>
    ){}

    async getAll(): Promise<OrdersDomain[]> {
        return await this.orderRepository.find()
    }
}