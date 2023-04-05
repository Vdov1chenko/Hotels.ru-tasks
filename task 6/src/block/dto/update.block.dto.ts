import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class UpdateBlockDto {

  @Transform(({ value }: TransformFnParams) => +value)
  @IsNumber()
  @IsDefined()
  @ApiProperty({example: 1, description: 'Block id'})
  readonly id: number

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ example: "sale-block", description: "Unique name of block" })
  blockName: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ example: "Today SALE!", description: "Block title" })
  title: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ example: "Discounts on clothes and shoes in Samara!", description: "Block content" })
  content: string;

  @IsOptional()
  @ApiProperty({ example: "image.jpg", description: "Block image" })
  image: string;

  @Transform(({ value }: TransformFnParams) => +value)
  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 4, description: "Foreign key to table groups" })
  groupId: number;

}