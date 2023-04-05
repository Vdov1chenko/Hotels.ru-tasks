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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const reg_dto_1 = require("./dto/reg.dto");
const users_model_1 = require("../users/users.model");
const create_user_dto_1 = require("../users/dto/create.user.dto");
const validation_pipe_1 = require("../pipes/validation.pipe");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerUser(regDto) {
        return this.authService.registerUser(regDto);
    }
    loginUser(userDto) {
        return this.authService.loginUser(userDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'register user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)('/registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reg_dto_1.RegDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'login user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('authorization'),
    (0, common_1.Controller)('/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map