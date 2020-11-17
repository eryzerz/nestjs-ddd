import { Inject, Injectable } from "@nestjs/common";
import { PartialProduct } from "../domain/partial.product.domain";
import { ProductDomain } from "../domain/product.domain";
import { IEditProductApplication } from "../interfaces/applications/edit.product.application.interface";
import { IEditProductService } from "../interfaces/services/edit.product.service.interface";
import { PRODUCT_TYPES } from "../interfaces/types";

@Injectable()
export class EditProductApplication implements IEditProductApplication {

    constructor(
        @Inject(PRODUCT_TYPES.services.IEditProductService) private productService: IEditProductService
    ){}

    async update(id: string, data: PartialProduct): Promise<ProductDomain> {
        return await this.productService.update(id, data)
    }
}