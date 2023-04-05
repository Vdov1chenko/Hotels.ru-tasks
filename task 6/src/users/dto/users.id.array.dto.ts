import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber } from "class-validator";

export class UsersIdArrayDto {

  @IsNumber({}, {each: true})
  @ArrayNotEmpty()
  @IsArray()
  @ApiProperty({ example: [1, 2, 3, 4], description: "Array with id", type: Array<number>})
  readonly idArray: Array<number>;

}