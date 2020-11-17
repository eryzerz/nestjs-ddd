import { PartialUser } from "src/users/domain/partial.user.domain";
import { UserDomain } from "src/users/domain/user.domain";

export interface IEditUserService {
    update(id: string, data: PartialUser): Promise<UserDomain>
}
