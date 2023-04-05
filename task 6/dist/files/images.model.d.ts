import { Model } from "sequelize-typescript";
import { Film } from "../films/films.model";
interface IImageCreation {
    image: string;
    essenceTable: string;
    essenceId: number;
}
export declare class Image extends Model<Image, IImageCreation> {
    image: string;
    essenceTable: string;
    essenceId: number;
    film: Film;
}
export {};
