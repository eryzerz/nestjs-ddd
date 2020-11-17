import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDomain } from "../domain/product.domain";
import { Product } from "../domain/product.entity";
import { IGetAllProductService } from "../interfaces/services/get.all.product.service.interface";

@Injectable()
export class GetAllProductService implements IGetAllProductService {

    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product> 
    ){}

    async getAll(): Promise<ProductDomain[]> {
        return await this.productRepository.find()
    }
}