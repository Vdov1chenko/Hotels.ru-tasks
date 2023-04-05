import { Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Profile } from "../profile/profile.model";

interface IUserCreation {
  login: string,
  password: string
}

@Table({ tableName: "users"})
export class User extends Model<User, IUserCreation> {

  @ApiProperty({ example: 1, description: "Primary key" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "mail@gmail.com", description: "Login or e-mail" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @ApiProperty({ example: "thisIsPassword", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty()
  @HasOne(() => Profile)
  profile: Profile;

}