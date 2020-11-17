import { IsString, IsNumber } from 'class-validator';
import { ProductDomain } from './product.domain';

export class PartialProduct implements PartialProduct {
    
    @IsString()
    readonly name: string;

    
    @IsNumber()
    readonly price: number;

}
