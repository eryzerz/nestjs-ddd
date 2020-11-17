import { ProductDomain } from "src/products/domain/product.domain";

export interface IGetProductApplication {
    getById(id: string): Promise<ProductDomain>
}