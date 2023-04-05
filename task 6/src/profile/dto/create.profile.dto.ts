import {ApiProperty} from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class CreateProfileDto {

	@IsDefined()
	@ApiProperty({example: 1, description: 'Foreign key references user id'})
	readonly id: number

	@ApiProperty({example: 'John', description: 'Users name'})
	readonly firstName: string

	@ApiProperty({example: 'Doe', description: 'Users surname'})
	readonly lastName: string

	@ApiProperty({example: '89456523636', description: 'Users phone-number'})
	readonly phoneNumber: string

	@ApiProperty({example: '1975-03-22', description: 'Users birthday'})
	readonly birthday: string

	@ApiProperty({example: true, description: 'Is the user an admin'})
	readonly isAdmin: boolean

}