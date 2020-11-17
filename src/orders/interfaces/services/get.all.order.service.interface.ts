import { OrdersDomain } from "src/orders/domain/order.domain";

export interface IGetAllOrderService {
    getAll(): Promise<OrdersDomain[]>
}