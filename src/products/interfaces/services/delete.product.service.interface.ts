import { DeleteResult } from "typeorm";

export interface IDeleteProductService {
    remove(id: string): Promise<{deleted: boolean}>
}