import { UserDomain } from "src/users/domain/user.domain";

export interface IGetAllUserApplication {
    getAll(): Promise<UserDomain[]>
}
