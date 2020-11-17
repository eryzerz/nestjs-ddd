import { OrdersDomain } from "src/orders/domain/order.domain";
import { PartialOrderDomain } from "src/orders/domain/partial.order.domain";
import { PartialOrderWithoutPromoDomain } from "src/orders/domain/partial.order.without.promo.domain";
import { ProductDomain } from "src/products/domain/product.domain";

export interface ICreateOrderApplication {
    create(data: PartialOrderDomain | PartialOrderWithoutPromoDomain): Promise<{product: ProductDomain,order: OrdersDomain | PartialOrderWithoutPromoDomain}>
}