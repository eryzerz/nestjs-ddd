import { OrdersDomain } from "src/orders/domain/order.domain";

export interface IGetOrderByUserService {
    getByUser(id: string): Promise<OrdersDomain[]> 
}