import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Film } from "../films/films.model";


interface IImageCreation {
  image: string;
  essenceTable: string;
  essenceId: number;
}


@Table({tableName: 'images', updatedAt: false})
export class Image extends Model<Image, IImageCreation> {

  @ApiProperty({example: 'fde-30.jpg', description: 'Image name'})
  @Column({type: DataType.STRING, allowNull: false})
  image: string;

  @ApiProperty({example: 'films', description: 'Main table name'})
  @Column({type: DataType.STRING, allowNull: true})
  essenceTable: string;

  @ApiProperty({example: 12, description: 'Foreign key'})
  @ForeignKey(() => Film)
  @Column({type: DataType.INTEGER, allowNull: true})
  essenceId: number;

  @ApiProperty()
  @BelongsTo(() => Film)
  film: Film
}