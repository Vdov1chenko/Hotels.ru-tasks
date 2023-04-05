import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { RegDto } from "./dto/reg.dto";
import { CreateUserDto } from "../users/dto/create.user.dto";
import { UsersService } from "../users/users.service";
import { ProfileService } from "../profile/profile.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import { CreateProfileDto } from "../profile/dto/create.profile.dto";
import { User } from "../users/users.model";

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService,
              private readonly profileService: ProfileService,
              private readonly jwtService: JwtService) {}

  async registerUser(regDto: RegDto) {

    const user = await this.usersService.getUserByLogin(regDto.login)

    if (user) {
      throw new HttpException('User with this login already exists', HttpStatus.BAD_REQUEST)
    }

    const { login, password, firstName, lastName, phoneNumber, birthday, isAdmin} = regDto

    const hashPassword = await bcrypt.hash(password, 5);
    const createUserDto: CreateUserDto = {
      login: login,
      password: hashPassword
    }

    const newUser = await this.usersService.createUser(createUserDto)

    const createProfileDto: CreateProfileDto = {
      id: +newUser.id,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      birthday: birthday,
      isAdmin: isAdmin
    }

    console.log(createProfileDto)

    const newProfile = await this.profileService.createProfile(createProfileDto)

    const createdUser = await this.usersService.getUserByLogin(login)

    return this.generateToken(createdUser)
  }

  async loginUser(userDto: CreateUserDto) {
    const user: User = await this.validateUser(userDto)
    return this.generateToken(user)

  }

  async generateToken(user: User) {
    return {
      token: this.jwtService.sign(user.toJSON())
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.usersService.getUserByLogin(userDto.login);
    if (user) {
      const passwordsEquals = await bcrypt.compare(userDto.password, user.password)
      if (passwordsEquals) return user
      throw new UnauthorizedException({
        message: 'Incorrect password'
      })
    }
    throw new UnauthorizedException({
      message: 'User with this login does not exist'
    })
  }
}
