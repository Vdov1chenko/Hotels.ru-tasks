import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNumber } from "class-validator";

export class FilmsIdArrayDto {

  @IsNumber({}, {each: true})
  @ArrayNotEmpty()
  @IsArray()
  @ApiProperty({ example: [1, 2, 3, 4], description: "Array with id", type: Array<number>})
  readonly idArray: Array<number>;

}