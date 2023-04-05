import { Model } from "sequelize-typescript";
import { Profile } from "../profile/profile.model";
interface IUserCreation {
    login: string;
    password: string;
}
export declare class User extends Model<User, IUserCreation> {
    id: number;
    login: string;
    password: string;
    profile: Profile;
}
export {};
