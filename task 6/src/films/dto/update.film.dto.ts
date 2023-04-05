import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";


export class UpdateFilmDto {

  @Transform(({ value }: TransformFnParams) => +value)
  @Min(1)
  @IsNumber()
  @IsDefined()
  @ApiProperty({ example: 1, description: "Primary key" })
  id: number

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ example: "Green mile", description: "Films name" })
  name: string;


  @Transform(({ value }: TransformFnParams) => +value)
  @IsNotEmpty()
  @IsNumber()
  @Max(2100)
  @Min(1890)
  @IsOptional()
  @ApiProperty({ example: "1993", description: "Films year" })
  year: number;


}