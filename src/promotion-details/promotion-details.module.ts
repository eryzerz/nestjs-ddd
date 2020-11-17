import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePromoDetailApplication } from './applications/create.promo.detail.application';
import { DeletePromoDetailApplication } from './applications/delete.promo.detail.application';
import { EditPromoDetailApplication } from './applications/edit.promo.detail.application';
import { GetAllPromoDetailApplication } from './applications/get.all.promo.detail.application';
import { GetPromoDetailApplication } from './applications/get.promo.detail.application';
import { PromoDetailController } from './controller/promo.detail.controller';
import { PromotionDetails } from './domain/promo.detail.entity';
import { PROMODETAIL_TYPES } from './interfaces/types';
import { CreatePromoDetailService } from './services/create.promo.detail.service';
import { DeletePromoDetailService } from './services/delete.promo.detail.service';
import { EditPromoDetailService } from './services/edit.promo.detail.service';
import { GetAllPromoDetailService } from './services/get.all.promo.detail.service';
import { GetPromoDetailService } from './services/get.promo.detail.service';

const createPromoDetailApp = { provide: PROMODETAIL_TYPES.applications.ICreatePromoDetailApplication, useClass: CreatePromoDetailApplication }
const getPromoDetailApp = { provide: PROMODETAIL_TYPES.applications.IGetPromoDetailApplication, useClass: GetPromoDetailApplication }
const getAllPromoDetailApp = { provide: PROMODETAIL_TYPES.applications.IGetAllPromoDetailApplication, useClass: GetAllPromoDetailApplication }
const editPromoDetailApp = { provide: PROMODETAIL_TYPES.applications.IEditPromoDetailApplication, useClass: EditPromoDetailApplication }
const deletePromoDetailApp = { provide: PROMODETAIL_TYPES.applications.IDeletePromoDetailApplication, useClass: DeletePromoDetailApplication }

const createPromoDetailService = { provide: PROMODETAIL_TYPES.services.ICreatePromoDetailService, useClass: CreatePromoDetailService }
const getPromoDetailService = { provide: PROMODETAIL_TYPES.services.IGetPromoDetailService, useClass: GetPromoDetailService}
const getAllPromoDetailService = { provide: PROMODETAIL_TYPES.services.IGetAllPromoDetailService, useClass: GetAllPromoDetailService }
const editPromoDetailService = { provide: PROMODETAIL_TYPES.services.IEditPromoDetailService, useClass: EditPromoDetailService }
const deletePromoDetailService = { provide: PROMODETAIL_TYPES.services.IDeletePromoDetailService, useClass: DeletePromoDetailService }

@Module({
    imports: [TypeOrmModule.forFeature([PromotionDetails])],
    controllers: [PromoDetailController],
    providers: [
        createPromoDetailApp,
        getPromoDetailApp,
        getAllPromoDetailApp,
        editPromoDetailApp,
        deletePromoDetailApp,
        createPromoDetailService,
        getPromoDetailService,
        getAllPromoDetailService,
        editPromoDetailService,
        deletePromoDetailService
    ]
})
export class PromotionDetailsModule {}
