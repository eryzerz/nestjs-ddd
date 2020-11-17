import { ProductDomain } from "src/products/domain/product.domain";

export interface IGetAllProductService {
    getAll(): Promise<ProductDomain[]>
}