import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { USER_TYPES } from '../interfaces/types';
import { IGetUserApplication } from '../interfaces/applications/get.user.application.interface';
import { IGetUserService } from '../interfaces/services/get.user.service.interface';

@Injectable()
export class GetUserApplication implements IGetUserApplication {
    constructor(@Inject(USER_TYPES.services.IGetUserService) private getUserService: IGetUserService) {}

    async getById(id: string): Promise<UserDomain> {
        const user = await this.getUserService.getById(id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} was not found`);
        }
        return user;
    }
}
