import { AuthService } from "./auth.service";
import { RegDto } from "./dto/reg.dto";
import { CreateUserDto } from "../users/dto/create.user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(regDto: RegDto): Promise<{
        token: string;
    }>;
    loginUser(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
}
