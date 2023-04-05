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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
const group_model_1 = require("./group.model");
const create_group_dto_1 = require("./dto/create.group.dto");
const update_group_dto_1 = require("./dto/update.group.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
const delete_group_dto_1 = require("./dto/delete.group.dto");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    getAllGroups() {
        const groups = this.groupService.getAllGroups();
        return groups;
    }
    getGroupByName(searchedGroup) {
        const groups = this.groupService.getGroupByName(searchedGroup);
        return groups;
    }
    updateGroupName(dto) {
        const groups = this.groupService.updateGroupName(dto);
        return groups;
    }
    deleteGroup(dto) {
        this.groupService.deleteGroup(dto);
    }
    createGroup(dto) {
        const group = this.groupService.createGroup(dto);
        return group;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all groups" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [group_model_1.Group], description: "Get all groups. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getAllGroups", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get group by name" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: group_model_1.Group, description: "Get group by name. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Get)(':searchedGroup'),
    __param(0, (0, common_1.Param)('searchedGroup')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getGroupByName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update group name" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Update group name by id. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_group_dto_1.UpdateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "updateGroupName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "delete group by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Delete group name by id. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_group_dto_1.DeleteGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "deleteGroup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create new group" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: group_model_1.Group, description: "Creation new Group. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "createGroup", null);
GroupController = __decorate([
    (0, swagger_1.ApiTags)("Group"),
    (0, common_1.Controller)("group"),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map