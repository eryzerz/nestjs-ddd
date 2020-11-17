import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, ParseUUIDPipe, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { PartialPromo } from '../domain/partial.promo.domain';
import { PromoDomain } from '../domain/promo.domain';
import { ICreatePromoApplication } from '../interfaces/applications/create.promo.application.interface';
import { IDeletePromoApplication } from '../interfaces/applications/delete.promo.application.interface';
import { IEditPromoApplication } from '../interfaces/applications/edit.promo.application.interface';
import { IGetAllPromoApplication } from '../interfaces/applications/get.all.promo.application.interface';
import { IGetPromoApplication } from '../interfaces/applications/get.promo.application.interface';
import { PROMO_TYPES } from '../interfaces/types';

@Controller('promotions')
export class PromotionsController {
    constructor(
        @Inject(PROMO_TYPES.applications.ICreatePromoApplication) private createPromoApp: ICreatePromoApplication,
        @Inject(PROMO_TYPES.applications.IGetPromoApplication) private getPromoApp: IGetPromoApplication,
        @Inject(PROMO_TYPES.applications.IGetAllPromoApplication) private getAllPromoApp: IGetAllPromoApplication,
        @Inject(PROMO_TYPES.applications.IEditPromoApplication) private editPromoApp: IEditPromoApplication,
        @Inject(PROMO_TYPES.applications.IDeletePromoApplication) private deletePromoApp: IDeletePromoApplication
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() promoDomain: PromoDomain) {
        try {
            const promo = await this.createPromoApp.create(promoDomain);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.CREATED,
                message: `${promo.title} successfully created`
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
        try {
            const promo = await this.getPromoApp.findOne(id);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: promo
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
            const promos = await this.getAllPromoApp.findAll();
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
    async update(@Res() res, @Param('id', new ParseUUIDPipe()) id, @Body(new ValidationPipe()) data: PartialPromo) {
        try {
            const updatedPromo = await this.editPromoApp.update(id, data);
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
            await this.deletePromoApp.remove(id)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: "Promo successfully deleted"
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }
}
