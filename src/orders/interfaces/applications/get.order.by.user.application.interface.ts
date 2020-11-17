import { OrdersDomain } from "src/orders/domain/order.domain";

export interface IGetOrderByUserApplication {
    getOrderByUser(id: string): Promise<OrdersDomain[]>
}