import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Group } from "./group.model";
import { CreateGroupDto } from "./dto/create.group.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { DeleteGroupDto } from "./dto/delete.group.dto";

@Injectable()
export class GroupService {

  constructor(@InjectModel(Group) private readonly groupRepository: typeof Group) {
  }

  async getGroupByName(searchedGroup) {

    const groups = await this.groupRepository.findAll({
      include: { all: true },
      where: { name: searchedGroup }
    });
    return groups;
  }

  async getAllGroups() {

    const groups = await this.groupRepository.findAll({ include: { all: true } });
    return groups;
  }

  async createGroup(dto: CreateGroupDto) {
    try {
      const group = await this.groupRepository.create(dto);
      return group;
    } catch (err) {
      throw new HttpException("group with the same name already exists", HttpStatus.BAD_REQUEST);
    }
  }

  async updateGroupName(dto: UpdateGroupDto) {
    const group = await this.groupRepository.findByPk(dto.id);
    if (!group) {
      throw new HttpException("group with this id does not exist", HttpStatus.BAD_REQUEST);
    }
    group.name = dto.name;
    await group.save();
  }

  async deleteGroup(dto: DeleteGroupDto) {
    for (let id of dto.idArray) {
      await this.groupRepository.destroy({ where: { id: id } });

    }
  }

  async findGroupById(id: number) {
    const group = await this.groupRepository.findByPk(id);
    return group;
  }
}
