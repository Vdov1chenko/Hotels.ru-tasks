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
exports.Profile = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../users/users.model");
let Profile = class Profile extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Foreign key references user id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, primaryKey: true }),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'User name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null }),
    __metadata("design:type", String)
], Profile.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'User surname' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null }),
    __metadata("design:type", String)
], Profile.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '89397577845', description: 'User phone-number' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null }),
    __metadata("design:type", String)
], Profile.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1989-05-17', description: 'User birthday' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: true, defaultValue: null }),
    __metadata("design:type", String)
], Profile.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Is the user an admin' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], Profile.prototype, "isAdmin", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Profile.prototype, "user", void 0);
Profile = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'profile' })
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map