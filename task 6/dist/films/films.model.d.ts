import { Model } from "sequelize-typescript";
import { Image } from "../files/images.model";
interface IFilmCreation {
    name: string;
    year: number;
}
export declare class Film extends Model<Film, IFilmCreation> {
    id: number;
    name: string;
    year: number;
    images: [Image];
}
export {};
