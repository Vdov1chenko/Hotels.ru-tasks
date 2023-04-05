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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("./users.model");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const users_id_array_dto_1 = require("./dto/users.id.array.dto");
const user_id_guard_1 = require("../guards/user-id.guard");
const delete_current_user_dto_1 = require("./dto/delete.current.user.dto");
const change_login_password_dto_1 = require("./dto/change.login.password.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    deleteUsersById(dto) {
        return this.userService.deleteUsersById(dto);
    }
    deleteCurrentUser(dto) {
        return this.userService.deleteCurrentUser(dto);
    }
    changeUserLoginPassword(dto) {
        return this.userService.changeUserLoginPassword(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all users" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_model_1.User], description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.Get)("/admin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete multiple users" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Delete)("/admin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_id_array_dto_1.UsersIdArrayDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUsersById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete users by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User deletes his profile" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, user_id_guard_1.UserIdGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_current_user_dto_1.DeleteCurrentUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteCurrentUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Change login and password" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User changes the login and password from his profile" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, user_id_guard_1.UserIdGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_login_password_dto_1.ChangeLoginPasswordDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changeUserLoginPassword", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)("User для работы с юзерами"),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map