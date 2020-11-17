import { Inject, Injectable } from "@nestjs/common";
import { OrdersDomain } from "../domain/order.domain";
import { IGetOrderByUserApplication } from "../interfaces/applications/get.order.by.user.application.interface";
import { IGetOrderByUserService } from "../interfaces/services/get.order.by.user.service.interface";
import { ORDER_TYPES } from "../interfaces/types";

@Injectable()
export class GetOrderByUserApplication implements IGetOrderByUserApplication {
    constructor(
        @Inject(ORDER_TYPES.services.IGetOrderByUserService) private orderService: IGetOrderByUserService
    ){}

    async getOrderByUser(id: string): Promise<OrdersDomain[]> {
        return await this.orderService.getByUser(id)
    }
}