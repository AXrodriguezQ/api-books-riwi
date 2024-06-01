import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    authorId: number;

    @IsNumber()
    @IsOptional()
    amount: number;

    @IsNumber()
    @IsOptional()
    sales: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

}
