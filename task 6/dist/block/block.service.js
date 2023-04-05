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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const block_model_1 = require("./block.model");
const files_service_1 = require("../files/files.service");
const group_service_1 = require("../group/group.service");
let BlockService = class BlockService {
    constructor(blockRepository, filesService, groupService) {
        this.blockRepository = blockRepository;
        this.filesService = filesService;
        this.groupService = groupService;
    }
    async createBlock(dto, image) {
        const group = await this.groupService.findGroupById(+dto.groupId);
        const eqBlock = await this.blockRepository.findOne({ where: { blockName: dto.blockName } });
        if (!group) {
            throw new common_1.HttpException("group with this id does not exist", common_1.HttpStatus.BAD_REQUEST);
        }
        if (eqBlock) {
            throw new common_1.HttpException("Block with the same name already exists", common_1.HttpStatus.BAD_REQUEST);
        }
        let imageName;
        if (image) {
            imageName = await this.filesService.createFile(image);
        }
        const block = await this.blockRepository.create(Object.assign(Object.assign({}, dto), { image: imageName }));
        return block;
    }
    async deleteBlock(dto) {
        for (let id of dto.idArray) {
            await this.blockRepository.destroy({ where: { id: id } });
        }
    }
    async updateBlock(dto, image) {
        if (dto.groupId) {
            const group = await this.groupService.findGroupById(+dto.groupId);
            if (!group) {
                throw new common_1.HttpException("group with this id does not exist", common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const block = await this.blockRepository.findByPk(+dto.id);
        if (!block) {
            throw new common_1.HttpException("block with this id does not exist", common_1.HttpStatus.BAD_REQUEST);
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
    async getBlock(blockName) {
        const block = await this.blockRepository.findAll({ include: { all: true }, where: { blockName: blockName } });
        return block;
    }
};
BlockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(block_model_1.Block)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService,
        group_service_1.GroupService])
], BlockService);
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map