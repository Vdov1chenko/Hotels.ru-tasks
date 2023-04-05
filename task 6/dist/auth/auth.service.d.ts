import { RegDto } from "./dto/reg.dto";
import { CreateUserDto } from "../users/dto/create.user.dto";
import { UsersService } from "../users/users.service";
import { ProfileService } from "../profile/profile.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/users.model";
export declare class AuthService {
    private readonly usersService;
    private readonly profileService;
    private readonly jwtService;
    constructor(usersService: UsersService, profileService: ProfileService, jwtService: JwtService);
    registerUser(regDto: RegDto): Promise<{
        token: string;
    }>;
    loginUser(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
    private validateUser;
}
