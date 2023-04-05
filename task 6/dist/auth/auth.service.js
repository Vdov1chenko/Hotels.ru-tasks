"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const profile_service_1 = require("../profile/profile.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(usersService, profileService, jwtService) {
        this.usersService = usersService;
        this.profileService = profileService;
        this.jwtService = jwtService;
    }
    async registerUser(regDto) {
        const user = await this.usersService.getUserByLogin(regDto.login);
        if (user) {
            throw new common_1.HttpException('User with this login already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const { login, password, firstName, lastName, phoneNumber, birthday, isAdmin } = regDto;
        const hashPassword = await bcrypt.hash(password, 5);
        const createUserDto = {
            login: login,
            password: hashPassword
        };
        const newUser = await this.usersService.createUser(createUserDto);
        const createProfileDto = {
            id: +newUser.id,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            birthday: birthday,
            isAdmin: isAdmin
        };
        console.log(createProfileDto);
        const newProfile = await this.profileService.createProfile(createProfileDto);
        const createdUser = await this.usersService.getUserByLogin(login);
        return this.generateToken(createdUser);
    }
    async loginUser(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    async generateToken(user) {
        return {
            token: this.jwtService.sign(user.toJSON())
        };
    }
    async validateUser(userDto) {
        const user = await this.usersService.getUserByLogin(userDto.login);
        if (user) {
            const passwordsEquals = await bcrypt.compare(userDto.password, user.password);
            if (passwordsEquals)
                return user;
            throw new common_1.UnauthorizedException({
                message: 'Incorrect password'
            });
        }
        throw new common_1.UnauthorizedException({
            message: 'User with this login does not exist'
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        profile_service_1.ProfileService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map