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
exports.Group = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const block_model_1 = require("../block/block.model");
let Group = class Group extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary key" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "main-page-block", description: "Group of blocks" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => block_model_1.Block),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Group.prototype, "blocks", void 0);
Group = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Groups" })
], Group);
exports.Group = Group;
//# sourceMappingURL=group.model.js.map