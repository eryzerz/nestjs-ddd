import { Inject, Injectable } from "@nestjs/common";
import { OrdersDomain } from "../domain/order.domain";
import { IGetAllOrderApplication } from "../interfaces/applications/get.all.order.application.interface";
import { IGetAllOrderService } from "../interfaces/services/get.all.order.service.interface";
import { ORDER_TYPES } from "../interfaces/types";

@Injectable()
export class GetAllOrderApplication implements IGetAllOrderApplication {
    constructor(
        @Inject(ORDER_TYPES.services.IGetAllOrderService) private orderService: IGetAllOrderService
    ){}

    async findAll(): Promise<OrdersDomain[]> {
        return await this.orderService.getAll()
    }
}