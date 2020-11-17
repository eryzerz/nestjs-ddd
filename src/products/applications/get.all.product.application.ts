import { Inject, Injectable } from "@nestjs/common";
import { ProductDomain } from "../domain/product.domain";
import { IGetAllProductApplication } from "../interfaces/applications/get.all.product.application.interface";
import { IGetAllProductService } from "../interfaces/services/get.all.product.service.interface";
import { PRODUCT_TYPES } from "../interfaces/types";

@Injectable()
export class GetAllProductApplication implements IGetAllProductApplication {

    constructor(
        @Inject(PRODUCT_TYPES.services.IGetAllProductService) private productService: IGetAllProductService
    ){}

    async getAll(): Promise<ProductDomain[]> {
        return await this.productService.getAll()
    }
}