import { ProductDomain } from "src/products/domain/product.domain";

export interface IGetProductService {
    getById(id: string): Promise<ProductDomain>;
}