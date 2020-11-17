import { Injectable, Inject } from '@nestjs/common';
import { UserDomain } from '../domain/user.domain';
import { ICreateUserApplication } from '../interfaces/applications/create.user.application.interface';
import { USER_TYPES } from '../interfaces/types';
import { ICreateUserService } from '../interfaces/services/create.user.service.interface';

@Injectable()
export class CreateUserApplication implements ICreateUserApplication {
    constructor(@Inject(USER_TYPES.services.ICreateUserService) private userService: ICreateUserService) {}

    async create(user: UserDomain): Promise<UserDomain> {
        return this.userService.create(user);
    }
}
