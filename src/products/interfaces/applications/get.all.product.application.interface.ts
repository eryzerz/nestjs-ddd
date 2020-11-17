import { ProductDomain } from "src/products/domain/product.domain";

export interface IGetAllProductApplication {
    getAll(): Promise<ProductDomain[]>
}