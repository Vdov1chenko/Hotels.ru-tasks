import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Block } from "../block/block.model";

interface IGroupCreation {
  name: string;

}

@Table({ tableName: "Groups" })
export class Group extends Model<Group, IGroupCreation> {

  @ApiProperty({ example: 1, description: "Primary key" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "main-page-block", description: "Group of blocks" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Block)
  @ApiProperty()
  blocks: Block[];
}