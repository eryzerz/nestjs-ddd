import { Inject, Injectable } from "@nestjs/common";
import { IDeleteUserApplication } from "../interfaces/applications/delete.user.application.interface";
import { IDeleteUserService } from "../interfaces/services/delete.user.service.interface";
import { USER_TYPES } from "../interfaces/types";

@Injectable()
export class DeleteUserApplication implements IDeleteUserApplication {
    constructor(
        @Inject(USER_TYPES.services.IDeleteUserService) private userService: IDeleteUserService
    ){}

    async remove(id: string): Promise<{deleted: boolean}> {
        return await this.userService.remove(id)
    }
}