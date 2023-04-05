import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Image } from "../files/images.model";


interface IFilmCreation {
  name: string

  year: number
}

@Table({tableName: 'films'})
export class Film extends Model<Film, IFilmCreation> {

  @ApiProperty({ example: 1, description: "Primary key" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'Green mile', description: 'Films name'})
  @Column({type: DataType.STRING, unique: true, allowNull:false})
  name: string

  @ApiProperty({example: 1993, description: 'Films year'})
  @Column({type: DataType.INTEGER, allowNull: false})
  year: number

  @ApiProperty({description: 'Array of Images'})
  @HasMany(() => Image, { foreignKey: "essenceId",
    constraints: false, scope: { essenceTable: "films" }})
  images: [Image]
}