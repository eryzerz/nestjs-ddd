import { ProductDomain } from "src/products/domain/product.domain";

export interface ICreateProductApplication {
    create(product: ProductDomain): Promise<ProductDomain>
}