import { Model } from "sequelize-typescript";
import { Group } from "../group/group.model";
interface IBlockCreation {
    blockName: string;
    title: string;
    content: string;
    image: string;
    groupId: number;
}
export declare class Block extends Model<Block, IBlockCreation> {
    id: number;
    blockName: string;
    title: string;
    content: string;
    image: string;
    groupId: number;
    group: Group;
}
export {};
