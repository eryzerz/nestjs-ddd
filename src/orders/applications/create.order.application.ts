import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ProductDomain } from "src/products/domain/product.domain";
import { IGetProductService } from "src/products/interfaces/services/get.product.service.interface";
import { PRODUCT_TYPES } from "src/products/interfaces/types";
import { PromoDetailDomain } from "src/promotion-details/domain/promo.detail.domain";
import { IGetPromoDetailService } from "src/promotion-details/interfaces/services/get.promo.detail.service.interface";
import { PROMODETAIL_TYPES } from "src/promotion-details/interfaces/types";
import { PromoDomain } from "src/promotions/domain/promo.domain";
import { IGetPromoService } from "src/promotions/interfaces/services/get.promo.service.interface";
import { PROMO_TYPES } from "src/promotions/interfaces/types";
import { OrdersDomain } from "../domain/order.domain";
import { PartialOrderDomain } from "../domain/partial.order.domain";
import { PartialOrderWithoutPromoDomain } from "../domain/partial.order.without.promo.domain";
import { ICreateOrderApplication } from "../interfaces/applications/create.order.application.interface";
import { ICreateOrderService } from "../interfaces/services/create.order.service.interface";
import { ORDER_TYPES } from "../interfaces/types";

@Injectable()
export class CreateOrderApplication implements ICreateOrderApplication {
    constructor(
        @Inject(ORDER_TYPES.services.ICreateOrderService) private orderService: ICreateOrderService,
        @Inject(PRODUCT_TYPES.services.IGetProductService) private productService: IGetProductService,
        @Inject(PROMODETAIL_TYPES.services.IGetPromoDetailService) private promoDetailService: IGetPromoDetailService,
        @Inject(PROMO_TYPES.services.IGetPromoService) private promoService: IGetPromoService
    ){}

    async create(detail: PartialOrderDomain): Promise<{product: ProductDomain, order: OrdersDomain | PartialOrderWithoutPromoDomain}> {
        const product = await this.productService.getById(detail.productId)
        let total: number
        let promoDetail: PromoDetailDomain
        let promo: PromoDomain
        let order: OrdersDomain | PartialOrderWithoutPromoDomain | any

        if (detail.promoDetailId) {
            promoDetail = await this.promoDetailService.getById(detail.promoDetailId) 

            if (promoDetail.productId === detail.productId) {
                promo = await this.promoService.findOne(promoDetail.promoId) 

                total = detail.qty * ((1 - parseFloat(promo.discount)) * product.price)

                order =  await this.orderService.create({...detail, productPrice: product.price, disc: promo.discount, total})

            } else {
                throw new NotFoundException('Promo cannot be used for this product')
            }
        } else {
            total = detail.qty *  product.price

            order =  await this.orderService.create({...detail, productPrice: product.price, total})
        }

        return {
            product,
            order
        } 
    }
}