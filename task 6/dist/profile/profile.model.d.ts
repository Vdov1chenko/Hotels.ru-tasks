import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
interface IProfileCreation {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthday: string;
    isAdmin: boolean;
}
export declare class Profile extends Model<Profile, IProfileCreation> {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthday: string;
    isAdmin: boolean;
    user: User;
}
export {};
