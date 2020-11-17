export interface IDeleteUserService {
    remove(id: string): Promise<{deleted: boolean}>
}
