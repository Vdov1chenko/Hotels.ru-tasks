import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersIdArrayDto } from "./dto/users.id.array.dto";
import { DeleteCurrentUserDto } from "./dto/delete.current.user.dto";
import { ChangeLoginPasswordDto } from "./dto/change.login.password.dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }


  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({ where: { login }, include: { all: true } });
    return user;
  }

  async deleteUsersById(dto: UsersIdArrayDto) {

    for (let id of dto.idArray) {
      await this.userRepository.destroy({ where: { id: id } });

    }

  }

  async deleteCurrentUser(dto: DeleteCurrentUserDto) {
    await this.userRepository.destroy({ where: { id: dto.id } });
  }

  async changeUserLoginPassword(dto: ChangeLoginPasswordDto) {
    const user = await this.userRepository.findByPk(dto.id);

    if (dto.login) {
      user.login = dto.login;
    }

    if (dto.password) {
      user.password = await bcrypt.hash(dto.password, 5);
    }

    await user.save();
  }
}
