import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './domain/product.entity';
import { ProductsController } from './controller/products.controller';
import { CreateProductService } from './services/create.product.service';
import { PRODUCT_TYPES } from './interfaces/types';
import { CreateProductApplication } from './applications/create.product.application';
import { GetProductService } from './services/get.product.service';
import { GetProductApplication } from './applications/get.product.application';
import { GetAllProductService } from './services/get.all.product.service';
import { GetAllProductApplication } from './applications/get.all.product.application';
import { EditProductService } from './services/edit.product.service';
import { DeleteProductService } from './services/delete.product.service';
import { EditProductApplication } from './applications/edit.product.application';
import { DeleteProductApplication } from './applications/delete.product.application';

const createProductApp = { provide: PRODUCT_TYPES.applications.ICreateProductApplication, useClass: CreateProductApplication  }
const getProductApp = { provide: PRODUCT_TYPES.applications.IGetProductApplication, useClass: GetProductApplication }
const getAllProductApp = { provide: PRODUCT_TYPES.applications.IGetAllProductApplication, useClass: GetAllProductApplication }
const editProductApp = { provide: PRODUCT_TYPES.applications.IEditProductApplication, useClass: EditProductApplication}
const deleteProductApp = { provide: PRODUCT_TYPES.applications.IDeleteProductApplication, useClass: DeleteProductApplication}

const createProductService = { provide: PRODUCT_TYPES.services.ICreateProductService, useClass: CreateProductService } 
const getProductService = { provide: PRODUCT_TYPES.services.IGetProductService, useClass: GetProductService }
const getAllProductService = { provide: PRODUCT_TYPES.services.IGetAllProductService, useClass: GetAllProductService}
const editProductService = { provide: PRODUCT_TYPES.services.IEditProductService, useClass: EditProductService}
const deleteProductService = { provide: PRODUCT_TYPES.services.IDeleteProductService, useClass: DeleteProductService}

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [
        createProductApp,
        getProductApp,
        getAllProductApp, 
        editProductApp,
        deleteProductApp,
        createProductService, 
        getProductService,
        getAllProductService,
        editProductService,
        deleteProductService
    ],
})
export class ProductsModule {}
