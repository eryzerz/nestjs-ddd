import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/domain/product.entity';
import { PRODUCT_TYPES } from 'src/products/interfaces/types';
import { GetProductService } from 'src/products/services/get.product.service';
import { PromotionDetails } from 'src/promotion-details/domain/promo.detail.entity';
import { PROMODETAIL_TYPES } from 'src/promotion-details/interfaces/types';
import { GetPromoDetailService } from 'src/promotion-details/services/get.promo.detail.service';
import { Promotions } from 'src/promotions/domain/promo.entity';
import { PROMO_TYPES } from 'src/promotions/interfaces/types';
import { GetPromoService } from 'src/promotions/services/get.promo.service';
import { CreateOrderApplication } from './applications/create.order.application';
import { GetAllOrderApplication } from './applications/get.all.order.application';
import { GetOrderByUserApplication } from './applications/get.order.by.user.application';
import { OrderController } from './controller/order.controller';
import { Orders } from './domain/order.entity';
import { ORDER_TYPES } from './interfaces/types';
import { CreateOrderService } from './services/create.order.service';
import { GetAllOrderService } from './services/get.all.order.service';
import { GetOrderByUserService } from './services/get.order.by.user.service';

const createOrderApp = { provide: ORDER_TYPES.applications.ICreateOrderApplication, useClass: CreateOrderApplication }
const getOrderByUserApp = { provide: ORDER_TYPES.applications.IGetOrderByUserApplication, useClass: GetOrderByUserApplication }
const getAllOrderApp = { provide: ORDER_TYPES.applications.IGetAllOrderApplication, useClass: GetAllOrderApplication }

const createOrderService = { provide: ORDER_TYPES.services.ICreateOrderService, useClass: CreateOrderService }
const getOrderByUserService = { provide: ORDER_TYPES.services.IGetOrderByUserService, useClass: GetOrderByUserService }
const getAllOrderService = { provide: ORDER_TYPES.services.IGetAllOrderService, useClass: GetAllOrderService }

const getProductService = { provide: PRODUCT_TYPES.services.IGetProductService, useClass: GetProductService }

const getPromoDetailService = { provide: PROMODETAIL_TYPES.services.IGetPromoDetailService, useClass: GetPromoDetailService }

const getPromotionService = { provide: PROMO_TYPES.services.IGetPromoService, useClass: GetPromoService }

@Module({
    imports: [TypeOrmModule.forFeature([Orders, Product, PromotionDetails, Promotions])],
    controllers: [OrderController],
    providers: [
        createOrderApp,
        getOrderByUserApp,
        getAllOrderApp,
        createOrderService,
        getOrderByUserService,
        getAllOrderService,
        getProductService,
        getPromoDetailService,
        getPromotionService,
    ]
})
export class OrdersModule {}
