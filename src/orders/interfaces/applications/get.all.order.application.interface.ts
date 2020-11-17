import { OrdersDomain } from "src/orders/domain/order.domain";

export interface IGetAllOrderApplication {
    findAll(): Promise<OrdersDomain[]>
}