import { Inject, Injectable } from "@nestjs/common";
import { ProductDomain } from "../domain/product.domain";
import { ICreateProductApplication } from "../interfaces/applications/create.product.application.interface";
import { ICreateProductService } from "../interfaces/services/create.product.service.interface";
import { PRODUCT_TYPES } from "../interfaces/types";

@Injectable()
export class CreateProductApplication implements ICreateProductApplication {
    constructor(
        @Inject(PRODUCT_TYPES.services.ICreateProductService) private productService: ICreateProductService
    ){}

    async create(product: ProductDomain): Promise<ProductDomain> {
        return await this.productService.create(product)
    }
}