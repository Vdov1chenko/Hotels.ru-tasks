import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, ArrayNotEmpty } from "class-validator";

export class DeleteGroupDto {

  @IsNumber({}, {each: true})
  @ArrayNotEmpty()
  @IsArray()
  @ApiProperty({ example: [1, 2, 3, 4], description: "Array with id", type: Array<number>})
  readonly idArray: Array<number>;

}