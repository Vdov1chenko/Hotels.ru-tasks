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
exports.Block = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const group_model_1 = require("../group/group.model");
let Block = class Block extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary key" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Block.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sale-block', description: "Unique name of block" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Block.prototype, "blockName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Today SALE!', description: "Block title" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Block.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Discounts on clothes and shoes in Samara!', description: "Block content" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Block.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'image.jpg', description: "Block image" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true, defaultValue: null }),
    __metadata("design:type", String)
], Block.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: "Foreign key to table groups" }),
    (0, sequelize_typescript_1.ForeignKey)(() => group_model_1.Group),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true, defaultValue: null }),
    __metadata("design:type", Number)
], Block.prototype, "groupId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, sequelize_typescript_1.BelongsTo)(() => group_model_1.Group),
    __metadata("design:type", group_model_1.Group)
], Block.prototype, "group", void 0);
Block = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "blocks" })
], Block);
exports.Block = Block;
//# sourceMappingURL=block.model.js.map