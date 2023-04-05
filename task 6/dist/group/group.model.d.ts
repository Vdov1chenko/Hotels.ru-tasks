import { Model } from "sequelize-typescript";
import { Block } from "../block/block.model";
interface IGroupCreation {
    name: string;
}
export declare class Group extends Model<Group, IGroupCreation> {
    id: number;
    name: string;
    blocks: Block[];
}
export {};
