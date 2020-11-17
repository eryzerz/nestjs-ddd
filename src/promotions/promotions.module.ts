import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePromoApplication } from './applications/create.promo.application';
import { DeletePromoApplication } from './applications/delete.promo.application';
import { EditPromoApplication } from './applications/edit.promo.application';
import { GetAllPromoApplication } from './applications/get.all.promo.application';
import { GetPromoApplication } from './applications/get.promo.application';
import { PromotionsController } from './controller/promotions.controller';
import { Promotions } from './domain/promo.entity';
import { PROMO_TYPES } from './interfaces/types';
import { CreatePromoService } from './services/create.promo.service';
import { DeletePromoService } from './services/delete.promo.service';
import { EditPromoService } from './services/edit.promo.service';
import { GetAllPromoService } from './services/get.all.service';
import { GetPromoService } from './services/get.promo.service';

const createPromoApplication = { provide: PROMO_TYPES.applications.ICreatePromoApplication, useClass: CreatePromoApplication}
const getAllPromoApplication = { provide: PROMO_TYPES.applications.IGetAllPromoApplication, useClass: GetAllPromoApplication}
const getPromoApplication = { provide: PROMO_TYPES.applications.IGetPromoApplication, useClass: GetPromoApplication}
const editPromoApplication = { provide: PROMO_TYPES.applications.IEditPromoApplication, useClass: EditPromoApplication}
const deletePromoApplication = { provide: PROMO_TYPES.applications.IDeletePromoApplication, useClass: DeletePromoApplication}

const createPromoService = { provide: PROMO_TYPES.services.ICreatePromoService, useClass: CreatePromoService}
const getAllPromoService = { provide: PROMO_TYPES.services.IGetAllPromoService, useClass: GetAllPromoService}
const getPromoService = { provide: PROMO_TYPES.services.IGetPromoService, useClass: GetPromoService}
const editPromoService = { provide: PROMO_TYPES.services.IEditPromoService, useClass: EditPromoService}
const deletePromoService = { provide: PROMO_TYPES.services.IDeletePromoService, useClass: DeletePromoService}

@Module({
  imports: [TypeOrmModule.forFeature([Promotions])],
  controllers: [PromotionsController],
  providers: [
    createPromoApplication,
    getAllPromoApplication,
    getPromoApplication,
    editPromoApplication,
    deletePromoApplication,
    createPromoService,
    getAllPromoService,
    getPromoService,
    editPromoService,
    deletePromoService
  ]
})
export class PromotionsModule {}
