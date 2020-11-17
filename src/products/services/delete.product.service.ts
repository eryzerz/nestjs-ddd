import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Product } from "../domain/product.entity";
import { IDeleteProductService } from "../interfaces/services/delete.product.service.interface";

@Injectable()
export class DeleteProductService implements IDeleteProductService {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        await this.productRepository.delete({productId: id})
        return {deleted: true}
    }
}