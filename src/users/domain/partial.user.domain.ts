import { IsString, IsEmail } from 'class-validator';
import { UserDomain } from './user.domain';

export class PartialUser implements PartialUser {
    @IsString()
    readonly fullName: string;

    @IsString()
    readonly password: string;

    @IsEmail()
    readonly email: string;
}
