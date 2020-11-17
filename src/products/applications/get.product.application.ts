import { Inject, Injectable } from "@nestjs/common";
import { ProductDomain } from "../domain/product.domain";
import { IGetProductApplication } from "../interfaces/applications/get.product.application.interface";
import { IGetProductService } from "../interfaces/services/get.product.service.interface";
import { PRODUCT_TYPES } from "../interfaces/types";

@Injectable()
export class GetProductApplication implements IGetProductApplication {
    
    constructor(
        @Inject(PRODUCT_TYPES.services.IGetProductService) private productService: IGetProductService
    ){}

    async getById(id: string): Promise<ProductDomain> {
        return await this.productService.getById(id)
    }
}