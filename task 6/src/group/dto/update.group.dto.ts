import {ApiProperty} from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, NotContains } from "class-validator";

export class UpdateGroupDto {

  @IsNumber()
  @IsDefined()
  @ApiProperty({example: 1, description: 'Group id'})
  readonly id: number

  @IsNotEmpty()
  @NotContains(' ', { message: "no spaces allowed" })
  @IsString()
  @IsDefined()
  @ApiProperty({example: 'new-group-name', description: 'New group name'})
  readonly name: string

}