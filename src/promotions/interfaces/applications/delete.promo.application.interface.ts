export interface IDeletePromoApplication {
    remove(id: string): Promise<{deleted: boolean}>
}