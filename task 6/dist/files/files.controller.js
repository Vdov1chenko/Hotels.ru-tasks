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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const files_service_1 = require("./files.service");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    deleteUnusedImages() {
        return this.filesService.deleteUnusedImages();
    }
    deleteImagesCreatedAnHourAgo() {
        return this.filesService.deleteImagesCreatedAnHourAgo();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Remove unused images" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Delete)("/delete/unused"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "deleteUnusedImages", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete images created an hour ago" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Delete)("/delete/hourago"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "deleteImagesCreatedAnHourAgo", null);
FilesController = __decorate([
    (0, swagger_1.ApiTags)('Files'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map