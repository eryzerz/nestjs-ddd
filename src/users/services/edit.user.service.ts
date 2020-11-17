import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartialUser } from '../domain/partial.user.domain';
import { UserDomain } from '../domain/user.domain';
import { User } from '../domain/user.entity';

@Injectable()
export class EditUserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    async update(id: string, data: PartialUser): Promise<UserDomain> {
        await this.userRepository.update({userId: id}, data)
        return await this.userRepository.findOne({userId: id})
    }
}
