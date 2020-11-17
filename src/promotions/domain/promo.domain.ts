import { IsDateString, IsDecimal, IsString, Max, Min } from "class-validator";

export class PromoDomain {

    @IsString()
    readonly title: string;

    @IsDecimal()
    readonly discount: string; 

    @IsDateString()
    readonly startDate: string;

    @IsDateString()
    readonly endDate: string;
}