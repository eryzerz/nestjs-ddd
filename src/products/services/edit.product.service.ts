import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialProduct } from "../domain/partial.product.domain";
import { ProductDomain } from "../domain/product.domain";
import { Product } from "../domain/product.entity";
import { IEditProductService } from "../interfaces/services/edit.product.service.interface";

@Injectable()
export class EditProductService implements IEditProductService {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ){}

    async update(id: string, data: PartialProduct): Promise<ProductDomain> {
        await this.productRepository.update({productId: id}, data)
        return await this.productRepository.findOne({productId: id})
    }
}