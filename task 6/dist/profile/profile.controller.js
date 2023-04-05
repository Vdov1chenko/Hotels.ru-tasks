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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const profile_service_1 = require("./profile.service");
const create_profile_dto_1 = require("./dto/create.profile.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const user_id_guard_1 = require("../guards/user-id.guard");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
const validation_pipe_1 = require("../pipes/validation.pipe");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    updateCurrentUserProfile(profileDto) {
        return this.profileService.updateProfile(profileDto);
    }
    updateProfileById(profileDto) {
        return this.profileService.updateProfile(profileDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Updating profile data" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User changes his profile' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, user_id_guard_1.UserIdGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateCurrentUserProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Updating profile data by user id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Change profile by id (for admin)' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)('/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfileById", null);
ProfileController = __decorate([
    (0, swagger_1.ApiTags)("Profile"),
    (0, common_1.Controller)("/user/profile"),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map