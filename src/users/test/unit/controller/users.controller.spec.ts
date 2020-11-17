import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../../controller/users.controller';
import { TYPES } from '../../../interfaces/types';

const user = {
    userId: '123123123',
    fullName: 'Rafael Pezzetti',
    password: '123456',
    email: 'rafael@pezzetti.com',
};

const editedUser = {
    ...user,
    password: '12121212'
}

const users = [
    ...[user],
    {
        userId: '456456456',
        fullName: 'Rizqullah Taufanriansyah',
        password: '654321',
        email: 'rizqullah.riansyah@gmail.com'
    }
]

class CreateUserApplicationMock {
    create(obj) {
        return user;
    }
}

class GetUserApplicationMock {
    getById(id) {
        return user;
    }
}

class GetAllUserApplicatonMock {
    getAll() {
        return users
    }
}

class EditUserApplicationMock {
    update(id, obj) {
        return editedUser
    }
}

class DeleteUserApplicationMock {
    remove(id) {
        return
    }
}

describe('Users Controller', () => {
    let controller: UsersController;
    let createUserAppMock;
    let getUserAppMock;
    let getAllUserAppMock;
    let editUserAppMock;
    let deleteUserAppMock;

    const response = {
        status: (statusCode: number) => response,
        json: json => json,
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: TYPES.applications.ICreateUserApplication,
                    useClass: CreateUserApplicationMock,
                },
                {
                    provide: TYPES.applications.IGetUserApplication,
                    useClass: GetUserApplicationMock,
                },
                {
                    provide: TYPES.applications.IGetAllUserApplication,
                    useClass: GetAllUserApplicatonMock
                },
                {
                    provide: TYPES.applications.IEditUserApplication,
                    useClass: EditUserApplicationMock
                },
                {
                    provide: TYPES.applications.IDeleteUserApplication,
                    useClass: DeleteUserApplicationMock
                }
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        createUserAppMock = module.get(TYPES.applications.ICreateUserApplication);
        getUserAppMock = module.get(TYPES.applications.IGetUserApplication);
        getAllUserAppMock = module.get(TYPES.applications.IGetAllUserApplication);
        editUserAppMock = module.get(TYPES.applications.IEditUserApplication);
        deleteUserAppMock = module.get(TYPES.applications.IDeleteUserApplication);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findOne', () => {
        it('should get user by id', async () => {
            jest.spyOn(getUserAppMock, 'getById');

            expect(await controller.findOne(response, user.userId)).toEqual({
                statusCode: 200,
                data: user
            });
            expect(getUserAppMock.getById).toBeCalled();
        });
    });

    describe('create', () => {
        it('should create user', async () => {
            jest.spyOn(createUserAppMock, 'create');

            expect(await controller.create(response, user)).toEqual({
                statusCode: 201,
                message: `${user.fullName} successfully created`
            });
            expect(createUserAppMock.create).toBeCalled();
        });
    });

    describe('findAll', () => {
        it('should get all user', async () => {
            jest.spyOn(getAllUserAppMock, 'getAll');

            expect(await controller.findAll(response)).toEqual({
                statusCode: 200,
                data: users
            });
            expect(getAllUserAppMock.getAll).toBeCalled();
        });
    });

    describe('update', () => {
        it('should update user data', async () => {
            jest.spyOn(editUserAppMock, 'update');

            expect(await controller.update(response, user.userId, {password: "12121212"})).toEqual({
                statusCode: 200,
                data: editedUser
            });
            expect(editUserAppMock.update).toBeCalled();
        });
    });

    describe('remove', () => {
        it('should remove user', async () => {
            jest.spyOn(deleteUserAppMock, 'remove');

            expect(await controller.remove(response, user.userId)).toEqual({
                statusCode: 200,
                message: "User successfully deleted"
            });
            expect(deleteUserAppMock.remove).toBeCalled();
        });
    });
});
