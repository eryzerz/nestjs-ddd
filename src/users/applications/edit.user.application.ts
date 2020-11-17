import { Inject, Injectable } from "@nestjs/common";
import { PartialUser } from "../domain/partial.user.domain";
import { UserDomain } from "../domain/user.domain";
import { IEditUserApplication } from "../interfaces/applications/edit.user.application.interface";
import { IEditUserService } from "../interfaces/services/edit.user.service.interface";
import { USER_TYPES } from "../interfaces/types";

@Injectable()
export class EditUserApplication implements IEditUserApplication {

    constructor(
        @Inject(USER_TYPES.services.IEditUserService) private userService: IEditUserService
    ){}

    async update(id: string, data: PartialUser): Promise<UserDomain> {
        return await this.userService.update(id, data)
    }
}