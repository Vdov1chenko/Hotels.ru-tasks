import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";


export class CreateFilmDto {

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ example: "Green mile", description: "Films name" })
  name: string;


  @Transform(({ value }: TransformFnParams) => +value)
  @IsNotEmpty()
  @IsNumber()
  @Max(2100)
  @Min(1890)
  @IsDefined()
  @ApiProperty({ example: "1993", description: "Films year" })
  year: number;


}