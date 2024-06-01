import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class UpdateBookDto {

    @IsNumber()
    @IsOptional()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

}
