import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString, NotContains } from "class-validator";

export class CreateGroupDto {

  @IsNotEmpty()
  @NotContains(' ', { message: "no spaces allowed" })
  @IsString()
  @IsDefined()
  @ApiProperty({ example: 'main-page-blocks', description: "Group of blocks" })
  name: string

}