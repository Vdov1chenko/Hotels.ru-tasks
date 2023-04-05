import {ApiProperty} from "@nestjs/swagger";
import { IsString, Length, IsOptional, IsNotEmpty, IsDefined } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class ChangeLoginPasswordDto {
  @ApiProperty({example: 1, description: 'User id'})
  readonly id: number

  @Length(4, 255, {message: 'Login must be longer than 4 characters'})
  @IsNotEmpty()
  // @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsOptional()
  @ApiProperty({example: 'mail@gmail.com', description: 'Login or e-mail'})
  readonly login: string

  @Length(4, 255, {message: 'Login must be longer than 4 characters'})
  @IsNotEmpty()
  // @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsString()
  @IsOptional()
  @ApiProperty({example: 'ThisIsPassword', description: 'Password'})
  readonly password: string

}