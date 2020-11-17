import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { CreateUserService } from './services/create.user.service';
import { User } from './domain/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserApplication } from './applications/create.user.application';
import { USER_TYPES } from './interfaces/types';
import { GetUserApplication } from './applications/get.user.application';
import { GetUserService } from './services/get.user.service';
import { GetAllUserService } from './services/get.all.user.service';
import { GetAllUserApplication } from './applications/get.all.user.application';
import { EditUserService } from './services/edit.user.service';
import { DeleteUserService } from './services/delete.user.service';
import { EditUserApplication } from './applications/edit.user.application';
import { DeleteUserApplication } from './applications/delete.user.applicateion';

const createUserApp = { provide: USER_TYPES.applications.ICreateUserApplication, useClass: CreateUserApplication };
const getUserApp = { provide: USER_TYPES.applications.IGetUserApplication, useClass: GetUserApplication };
const getAllUserApp = { provide: USER_TYPES.applications.IGetAllUserApplication, useClass: GetAllUserApplication}
const editUserApp = { provide: USER_TYPES.applications.IEditUserApplication, useClass: EditUserApplication}
const deleteUserApp = { provide: USER_TYPES.applications.IDeleteUserApplication, useClass: DeleteUserApplication}

const createUserService = { provide: USER_TYPES.services.ICreateUserService, useClass: CreateUserService };
const getUserService = { provide: USER_TYPES.services.IGetUserService, useClass: GetUserService };
const getAllUserService = { provide: USER_TYPES.services.IGetAllUserService, useClass: GetAllUserService };
const editUserService = { provide: USER_TYPES.services.IEditUserService, useClass: EditUserService}
const deleteUserService = { provide: USER_TYPES.services.IDeleteUserService, useClass: DeleteUserService}

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [
        createUserApp, 
        getUserApp, 
        getAllUserApp, 
        editUserApp, 
        deleteUserApp, 
        createUserService, 
        getUserService, 
        getAllUserService, 
        editUserService, 
        deleteUserService
    ],
})
export class UsersModule {}
