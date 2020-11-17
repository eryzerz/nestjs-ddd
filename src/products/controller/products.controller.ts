import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseUUIDPipe, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { IGetAllUserApplication } from 'src/users/interfaces/applications/get.all.user.application.interface';
import { PartialProduct } from '../domain/partial.product.domain';
import { ProductDomain } from '../domain/product.domain';
import { ICreateProductApplication } from '../interfaces/applications/create.product.application.interface';
import { IDeleteProductApplication } from '../interfaces/applications/delete.product.application.interface';
import { IEditProductApplication } from '../interfaces/applications/edit.product.application.interface';
import { IGetProductApplication } from '../interfaces/applications/get.product.application.interface';
import { PRODUCT_TYPES } from '../interfaces/types';

@Controller('products')
export class ProductsController {
    constructor(
        @Inject(PRODUCT_TYPES.applications.ICreateProductApplication) private createProductApp: ICreateProductApplication,
        @Inject(PRODUCT_TYPES.applications.IGetProductApplication) private getProductApp: IGetProductApplication,
        @Inject(PRODUCT_TYPES.applications.IGetAllProductApplication) private getAllProduct: IGetAllUserApplication,
        @Inject(PRODUCT_TYPES.applications.IEditProductApplication) private editProductApp: IEditProductApplication,
        @Inject(PRODUCT_TYPES.applications.IDeleteProductApplication) private deleteProductApp: IDeleteProductApplication
    ){}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() productDomain: ProductDomain) {
        try {
            const product = await this.createProductApp.create(productDomain)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.CREATED,
                message: `${product.name} successfully created`
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
        try {
            const product = await this.getProductApp.getById(id)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: product
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Get()
    async findAll(@Res() res) {
        try {
            const products = await this.getAllProduct.getAll()
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: products
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @UsePipes(new ValidationPipe())
    @Patch('/update/:id')
    async update(@Res() res, @Param('id', new ParseUUIDPipe()) id: string, @Body() data: PartialProduct) {
        const updatedProduct = await this.editProductApp.update(id, data)

        if (updatedProduct) {
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: updatedProduct
            })
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid input type"
            })
        }
    }

    @Delete('/delete/:id')
    async remove(@Res() res, @Param('id', new ParseUUIDPipe()) id: string) {
        try {
            await this.deleteProductApp.remove(id)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: "Product successfully deleted"
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

}
