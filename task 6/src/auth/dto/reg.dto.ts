import {ApiProperty} from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString, Length } from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class RegDto {


	@Length(4, 255, {message: 'Login must be longer than 4 characters'})
	@IsNotEmpty()
	// @Transform(({ value }: TransformFnParams) => value?.trim())
	@IsString()
	@IsDefined()
	@ApiProperty({example: 'mail@gmail.com', description: 'Login or e-mail'})
	readonly login: string

	@Length(4, 255, {message: 'Login must be longer than 4 characters'})
	@IsNotEmpty()
	// @Transform(({ value }: TransformFnParams) => value?.trim())
	@IsString()
	@IsDefined()
	@ApiProperty({example: 'ThisIsPassword', description: 'Password'})
	readonly password: string

	@ApiProperty({example: 'John', description: 'User name'})
	readonly firstName: string

	@ApiProperty({example: 'Doe', description: 'User surname'})
	readonly lastName: string

	@ApiProperty({example: '89456523636', description: 'User phone-number'})
	readonly phoneNumber: string

	@ApiProperty({example: '1975-03-22', description: 'User birthday'})
	readonly birthday: string

	@ApiProperty({example: true, description: 'Is the user an admin'})
	readonly isAdmin: boolean

}