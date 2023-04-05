import { User } from "./users.model";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersIdArrayDto } from "./dto/users.id.array.dto";
import { DeleteCurrentUserDto } from "./dto/delete.current.user.dto";
import { ChangeLoginPasswordDto } from "./dto/change.login.password.dto";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByLogin(login: string): Promise<User>;
    deleteUsersById(dto: UsersIdArrayDto): Promise<void>;
    deleteCurrentUser(dto: DeleteCurrentUserDto): Promise<void>;
    changeUserLoginPassword(dto: ChangeLoginPasswordDto): Promise<void>;
}
