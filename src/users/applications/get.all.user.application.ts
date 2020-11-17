import { Inject, Injectable } from "@nestjs/common";
import { UserDomain } from "../domain/user.domain";
import { IGetAllUserApplication } from "../interfaces/applications/get.all.user.application.interface";
import { IGetAllUserService } from "../interfaces/services/get.all.user.service.interface";
import { USER_TYPES } from "../interfaces/types";

@Injectable()
export class GetAllUserApplication implements IGetAllUserApplication {
    constructor(
        @Inject(USER_TYPES.services.IGetAllUserService) private userService: IGetAllUserService,
    ) {}

    async getAll(): Promise<UserDomain[]> {
        return await this.userService.getAll()
    }
}