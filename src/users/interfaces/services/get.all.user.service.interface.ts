import { UserDomain } from "src/users/domain/user.domain";

export interface IGetAllUserService {
    getAll(): Promise<UserDomain[]>
}
