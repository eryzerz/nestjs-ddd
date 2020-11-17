import { Body, Controller, Get, HttpStatus, Inject, Param, ParseUUIDPipe, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { OrdersDomain } from "../domain/order.domain";
import { PartialOrderDomain } from "../domain/partial.order.domain";
import { PartialOrderWithoutPromoDomain } from "../domain/partial.order.without.promo.domain";
import { ICreateOrderApplication } from "../interfaces/applications/create.order.application.interface";
import { IGetAllOrderApplication } from "../interfaces/applications/get.all.order.application.interface";
import { IGetOrderByUserApplication } from "../interfaces/applications/get.order.by.user.application.interface";
import { ORDER_TYPES } from "../interfaces/types";

@Controller('orders')
export class OrderController {
    constructor(
        @Inject(ORDER_TYPES.applications.ICreateOrderApplication) private createOrderApp: ICreateOrderApplication,
        @Inject(ORDER_TYPES.applications.IGetOrderByUserApplication) private getOrderByUserApp: IGetOrderByUserApplication,
        @Inject(ORDER_TYPES.applications.IGetAllOrderApplication) private getAllOrderApp: IGetAllOrderApplication
    ){}

    @UsePipes(new ValidationPipe())
    @Post('/buy')
    async buy(@Res() res, @Body() orderDomain: OrdersDomain) {
  
            const { product, order } = await this.createOrderApp.create(orderDomain);

            delete order.productId

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.CREATED,
                message: `Order successfully created`,
                data: {
                    order,
                    product
                }
            });
    }

    @Get('/userId/:id')
    async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
        try {
            const orders = await this.getOrderByUserApp.getOrderByUser(id);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: orders
            });
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
            const orders = await this.getAllOrderApp.findAll();
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: orders
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }
}