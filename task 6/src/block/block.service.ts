import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create.block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Block } from "./block.model";
import { FilesService } from "../files/files.service";
import { GroupService } from "../group/group.service";
import { DeleteBlockDto } from "./dto/delete.block.dto";
import { UpdateBlockDto } from "./dto/update.block.dto";
import { Group } from "../group/group.model";


@Injectable()
export class BlockService {

  constructor(@InjectModel(Block) private readonly blockRepository: typeof Block,
              private readonly filesService: FilesService,
              private readonly groupService: GroupService) {
  }

  async createBlock(dto: CreateBlockDto, image) {
    const group = await this.groupService.findGroupById(+dto.groupId);
    const eqBlock = await this.blockRepository.findOne({ where: { blockName: dto.blockName } });

    if (!group) {
      throw new HttpException("group with this id does not exist", HttpStatus.BAD_REQUEST);
    }

    if (eqBlock) {
      throw new HttpException("Block with the same name already exists", HttpStatus.BAD_REQUEST);
    }

    let imageName: string | undefined;
    if (image) {
      imageName = await this.filesService.createFile(image);
    }

    const block = await this.blockRepository.create({ ...dto, image: imageName });

    return block;
  }

  async deleteBlock(dto: DeleteBlockDto) {
    for (let id of dto.idArray) {
      await this.blockRepository.destroy({ where: { id: id } });

    }

  }

  async updateBlock(dto: UpdateBlockDto, image) {

    if (dto.groupId) {
      const group = await this.groupService.findGroupById(+dto.groupId);

      if (!group) {
        throw new HttpException("group with this id does not exist", HttpStatus.BAD_REQUEST);
      }
    }

    const block = await this.blockRepository.findByPk(+dto.id);
    if (!block) {
      throw new HttpException("block with this id does not exist", HttpStatus.BAD_REQUEST);
    }

    if (image) {
      const imageName = await this.filesService.createFile(image);
      block.image = imageName;
    }

    for (let key in dto) {
      if (dto[key] && key !== "id") {
        block[key] = dto[key];
      }
    }

    await block.save();
  }


  async getBlock(blockName: string) {
    const block = await this.blockRepository.findAll({ include: { all: true }, where: {blockName: blockName} })
    return block
  }
}
