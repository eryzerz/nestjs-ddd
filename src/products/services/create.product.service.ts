import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../domain/product.entity';
import { ProductDomain } from '../domain/product.domain'
import { ICreateProductService } from '../interfaces/services/create.product.service.interface';

@Injectable()
export class CreateProductService implements ICreateProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ){}

    async create(product: ProductDomain): Promise<ProductDomain>{
        return await this.productRepository.save(product)
    }
}
