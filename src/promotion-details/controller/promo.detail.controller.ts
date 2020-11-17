import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseUUIDPipe, Patch, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { PartialPromoDetail } from "../domain/partial.promo.detail.domain";
import { PromoDetailDomain } from "../domain/promo.detail.domain";
import { ICreatePromoDetailApplication } from "../interfaces/applications/create.promo.detail.application.interface";
import { IDeletePromoDetailApplication } from "../interfaces/applications/delete.promo.detail.application.interface";
import { IEditPromoDetailApplication } from "../interfaces/applications/edit.promo.detail.application.interface";
import { IGetAllPromoDetailApplication } from "../interfaces/applications/get.all.promo.detail.application.interface";
import { IGetPromoDetailApplication } from "../interfaces/applications/get.promo.detail.application.interface";
import { PROMODETAIL_TYPES } from "../interfaces/types";

@Controller('promo-details')
export class PromoDetailController {
    constructor(
        @Inject(PROMODETAIL_TYPES.applications.ICreatePromoDetailApplication) private createPromoDetailApp: ICreatePromoDetailApplication,
        @Inject(PROMODETAIL_TYPES.applications.IGetPromoDetailApplication) private getPromoDetailApp: IGetPromoDetailApplication,
        @Inject(PROMODETAIL_TYPES.applications.IGetAllPromoDetailApplication) private getAllPromoDetailApp: IGetAllPromoDetailApplication,
        @Inject(PROMODETAIL_TYPES.applications.IEditPromoDetailApplication) private editPromoDetailApp: IEditPromoDetailApplication,
        @Inject(PROMODETAIL_TYPES.applications.IDeletePromoDetailApplication) private deletePromoDetailApp: IDeletePromoDetailApplication
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() promoDetailDomain: PromoDetailDomain) {
        try {
            const promo = await this.createPromoDetailApp.create(promoDetailDomain);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.CREATED,
                message: `Promo detail successfully created`
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
        try {
            const detail = await this.getPromoDetailApp.get(id);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: detail
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
            const promos = await this.getAllPromoDetailApp.findAll();
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: promos
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Patch('/update/:id')
    async update(@Res() res, @Param('id', new ParseUUIDPipe()) id, @Body(new ValidationPipe()) data: PartialPromoDetail) {
        try {
            const updatedPromo = await this.editPromoDetailApp.edit(id, data);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: updatedPromo
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Delete('/delete/:id')
    async remove(@Res() res, @Param('id', new ParseUUIDPipe()) id: string) {
        try {
            await this.deletePromoDetailApp.delete(id)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: "Promo Detail successfully deleted"
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }
}