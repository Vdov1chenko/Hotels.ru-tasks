import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class CreateBlockDto {

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ example: "sale-block", description: "Unique name of block" })
  blockName: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ example: "Today SALE!", description: "Block title" })
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  @ApiProperty({ example: "Discounts on clothes and shoes in Samara!", description: "Block content" })
  content: string;

  @IsOptional()
  @ApiProperty({ example: "image.jpg", description: "Block image" })
  image: string;

  @Transform(({ value }: TransformFnParams) => +value)
  @IsNumber()
  @IsDefined()
  @ApiProperty({ example: 4, description: "Foreign key to table groups" })
  groupId: number;

}