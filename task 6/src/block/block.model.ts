import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Group } from "../group/group.model";

interface IBlockCreation {
  blockName: string,
  title: string,
  content: string,
  image: string,
  groupId: number

}

@Table({ tableName: "blocks" })
export class Block extends Model<Block, IBlockCreation> {

  @ApiProperty({ example: 1, description: "Primary key" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'sale-block', description: "Unique name of block" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  blockName: string

  @ApiProperty({ example: 'Today SALE!', description: "Block title" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string

  @ApiProperty({ example: 'Discounts on clothes and shoes in Samara!', description: "Block content" })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string

  @ApiProperty({ example: 'image.jpg', description: "Block image" })
  @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
  image: string

  @ApiProperty({ example: 4, description: "Foreign key to table groups" })
  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: null })
  groupId: number

  @ApiProperty()
  @BelongsTo(() => Group)
  group: Group
}