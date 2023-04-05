import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface IProfileCreation {

	id: number
	firstName: string,
	lastName: string,
	phoneNumber: string,
	birthday: string,
	isAdmin: boolean,

}

@Table({tableName: 'profile'})
export class Profile extends Model<Profile, IProfileCreation> {

	@ApiProperty({example: 1, description: 'Foreign key references user id'})
	@ForeignKey(() => User)
	@Column({type: DataType.INTEGER, unique: true, primaryKey: true})
	id: number;

	@ApiProperty({example: 'John', description: 'User name'})
	@Column({type: DataType.STRING, allowNull: true, defaultValue: null})
	firstName: string;

	@ApiProperty({example: 'Doe', description: 'User surname'})
	@Column({type: DataType.STRING, allowNull: true, defaultValue: null})
	lastName: string;

	@ApiProperty({example: '89397577845', description: 'User phone-number'})
	@Column({type: DataType.STRING, allowNull: true, defaultValue: null})
	phoneNumber: string;

	@ApiProperty({example: '1989-05-17', description: 'User birthday'})
	@Column({type: DataType.DATE, allowNull: true, defaultValue: null})
	birthday: string;

	@ApiProperty({example: true, description: 'Is the user an admin'})
	@Column({type: DataType.BOOLEAN, defaultValue: false})
	isAdmin: boolean;

	@BelongsTo(() => User)
	user: User

}