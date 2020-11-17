import { PartialProduct } from "src/products/domain/partial.product.domain";
import { ProductDomain } from "src/products/domain/product.domain";

export interface IEditProductApplication {
    update(id: string, data: PartialProduct): Promise<ProductDomain>
}