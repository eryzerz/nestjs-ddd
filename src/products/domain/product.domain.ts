import { IsString, IsNumber } from 'class-validator';

export class ProductDomain {
    
    @IsString()
    readonly name: string;

    
    @IsNumber()
    readonly price: number;

}
