import { ProductDomain } from "src/products/domain/product.domain";

export interface ICreateProductService {
    create(product: ProductDomain): Promise<ProductDomain>
}
