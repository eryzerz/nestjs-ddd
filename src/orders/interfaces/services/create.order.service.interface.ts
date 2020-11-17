import { OrdersDomain } from "src/orders/domain/order.domain";
import { PartialOrderWithoutPromoDomain } from "src/orders/domain/partial.order.without.promo.domain";

export interface ICreateOrderService {
    create(data: OrdersDomain | PartialOrderWithoutPromoDomain): Promise<OrdersDomain>
}