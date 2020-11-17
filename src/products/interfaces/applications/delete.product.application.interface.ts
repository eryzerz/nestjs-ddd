export interface IDeleteProductApplication {
    remove(id: string): Promise<{deleted: boolean}>
}