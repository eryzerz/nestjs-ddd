export interface IDeleteUserApplication {
    remove(id: string): Promise<{deleted: boolean}>
}
