import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe, Patch, Delete } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { USER_TYPES } from '../interfaces/types';
import { ICreateUserApplication } from '../interfaces/applications/create.user.application.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { IGetUserApplication } from '../interfaces/applications/get.user.application.interface';
import { IGetAllUserApplication } from '../interfaces/applications/get.all.user.application.interface';
import { IEditUserApplication } from '../interfaces/applications/edit.user.application.interface';
import { IDeleteUserApplication } from '../interfaces/applications/delete.user.application.interface';
import { PartialUser } from '../domain/partial.user.domain';

@Controller('users')
export class UsersController {
    constructor(
        @Inject(USER_TYPES.applications.ICreateUserApplication) private createUserApp: ICreateUserApplication,
        @Inject(USER_TYPES.applications.IGetUserApplication) private getUserApp: IGetUserApplication,
        @Inject(USER_TYPES.applications.IGetAllUserApplication) private getAllUserApp: IGetAllUserApplication,
        @Inject(USER_TYPES.applications.IEditUserApplication) private editUserApp: IEditUserApplication,
        @Inject(USER_TYPES.applications.IDeleteUserApplication) private deleteUserApp: IDeleteUserApplication
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() userDomain: UserDomain) {
        try {
            const user = await this.createUserApp.create(userDomain);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.CREATED,
                message: `${user.fullName} successfully created`
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json(err)
        }
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
        try {
            const user = await this.getUserApp.getById(id);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: user
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
            const users = await this.getAllUserApp.getAll();
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: users
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }

    @Patch('/update/:id')
    async update(@Res() res, @Param('id', new ParseUUIDPipe()) id, @Body() data: PartialUser) {
        try {
            const updatedUser = await this.editUserApp.update(id, data);
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: updatedUser
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
            await this.deleteUserApp.remove(id)
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                message: "User successfully deleted"
            })
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                statusCode: HttpStatus.BAD_REQUEST,
                message: err
            })
        }
    }
}
