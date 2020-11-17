import { IsDateString, IsDecimal, IsString } from "class-validator";
import { PromoDomain } from "./promo.domain";

export class PartialPromo implements Partial<PromoDomain> {
    @IsString()
    readonly title: string;

    @IsDecimal()
    readonly discount: string; 

    @IsDateString()
    readonly startDate: string;

    @IsDateString()
    readonly endDate: string;
}