import { Inject, Injectable } from "@nestjs/common";
import { IDeleteProductApplication } from "../interfaces/applications/delete.product.application.interface";
import { PRODUCT_TYPES } from "../interfaces/types";

@Injectable()
export class DeleteProductApplication implements IDeleteProductApplication {

    constructor(
        @Inject(PRODUCT_TYPES.services.IDeleteProductService) private productService: IDeleteProductApplication
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        return await this.productService.remove(id)
    }
}