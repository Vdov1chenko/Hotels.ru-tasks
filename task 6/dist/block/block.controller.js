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
exports.BlockController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const block_service_1 = require("./block.service");
const create_block_dto_1 = require("./dto/create.block.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
const platform_express_1 = require("@nestjs/platform-express");
const validation_pipe_1 = require("../pipes/validation.pipe");
const delete_block_dto_1 = require("./dto/delete.block.dto");
const update_block_dto_1 = require("./dto/update.block.dto");
let BlockController = class BlockController {
    constructor(blockService) {
        this.blockService = blockService;
    }
    updateBlock(dto, image) {
        const block = this.blockService.updateBlock(dto, image);
        return block;
    }
    getBlock(blockName) {
        console.log(blockName);
        const block = this.blockService.getBlock(blockName);
        return block;
    }
    deleteGroup(dto) {
        this.blockService.deleteBlock(dto);
    }
    createBlock(dto, image) {
        const block = this.blockService.createBlock(dto, image);
        return block;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update block data" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Update block data by id. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_block_dto_1.UpdateBlockDto, Object]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "updateBlock", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get block by name" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Get block by name. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Get)(':blockName'),
    __param(0, (0, common_1.Param)('blockName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "getBlock", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "delete blocks by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Delete block by id. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_block_dto_1.DeleteBlockDto]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "deleteGroup", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create new block" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Create new block. Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_block_dto_1.CreateBlockDto, Object]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "createBlock", null);
BlockController = __decorate([
    (0, swagger_1.ApiTags)('Block'),
    (0, common_1.Controller)('block'),
    __metadata("design:paramtypes", [block_service_1.BlockService])
], BlockController);
exports.BlockController = BlockController;
//# sourceMappingURL=block.controller.js.map