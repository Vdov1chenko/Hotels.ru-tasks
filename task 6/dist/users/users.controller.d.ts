import { UsersService } from "./users.service";
import { User } from "./users.model";
import { UsersIdArrayDto } from "./dto/users.id.array.dto";
import { DeleteCurrentUserDto } from "./dto/delete.current.user.dto";
import { ChangeLoginPasswordDto } from "./dto/change.login.password.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    deleteUsersById(dto: UsersIdArrayDto): Promise<void>;
    deleteCurrentUser(dto: DeleteCurrentUserDto): Promise<void>;
    changeUserLoginPassword(dto: ChangeLoginPasswordDto): Promise<void>;
}
