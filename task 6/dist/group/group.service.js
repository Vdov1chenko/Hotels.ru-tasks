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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const group_model_1 = require("./group.model");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
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
    async createGroup(dto) {
        try {
            const group = await this.groupRepository.create(dto);
            return group;
        }
        catch (err) {
            throw new common_1.HttpException("group with the same name already exists", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateGroupName(dto) {
        const group = await this.groupRepository.findByPk(dto.id);
        if (!group) {
            throw new common_1.HttpException("group with this id does not exist", common_1.HttpStatus.BAD_REQUEST);
        }
        group.name = dto.name;
        await group.save();
    }
    async deleteGroup(dto) {
        for (let id of dto.idArray) {
            await this.groupRepository.destroy({ where: { id: id } });
        }
    }
    async findGroupById(id) {
        const group = await this.groupRepository.findByPk(id);
        return group;
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(group_model_1.Group)),
    __metadata("design:paramtypes", [Object])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map