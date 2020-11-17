import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDomain } from '../domain/user.domain';
import { User } from '../domain/user.entity';
import { IGetAllUserService } from '../interfaces/services/get.all.user.service.interface';

@Injectable()
export class GetAllUserService implements IGetAllUserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    async getAll(): Promise<UserDomain[]> {
        return await this.userRepository.find()
    }
}
