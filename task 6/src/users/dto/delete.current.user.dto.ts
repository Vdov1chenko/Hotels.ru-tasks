import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class DeleteCurrentUserDto {

  @IsDefined()
  @ApiProperty({ example: 1, description: "User id" })
  readonly id: number;

}