import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsDefined, IsNumber, Min } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class MakeImagesUnusedDto {

  @Transform(({ value }: TransformFnParams) => +value)
  @Min(1)
  @IsNumber()
  @IsDefined()
  @ApiProperty({ example: 1, description: "Primary key" })
  id: number

  @IsNumber({}, {each: true})
  @ArrayNotEmpty()
  @IsArray()
  @ApiProperty({ example: [1, 2, 3, 4], description: "Array with id", type: Array<number>})
  readonly idArray: Array<number>;

}