import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {


  @ApiProperty({ example: "mail@gmail.com", description: "Login or e-mail" })
  readonly login: string;


  @ApiProperty({ example: "ThisIsPassword", description: "Password" })
  readonly password: string;

}