import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDomain } from '../domain/product.domain';
import { Product } from '../domain/product.entity';
import { IGetProductService } from '../interfaces/services/get.product.service.interface';

@Injectable()
export class GetProductService implements IGetProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ){}

    async getById(id: string): Promise<ProductDomain> {
        try {
            return await this.productRepository.findOne({productId: id})
        } catch {
            throw new NotFoundException('Product ID is invalid')
        }
    }
}
