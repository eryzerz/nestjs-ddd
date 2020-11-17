export interface IDeletePromoService {
    remove(id: string): Promise<{deleted: boolean}>
}