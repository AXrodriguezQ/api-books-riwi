import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAuthorDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

}
