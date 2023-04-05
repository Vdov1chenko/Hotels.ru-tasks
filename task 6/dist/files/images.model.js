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
exports.Image = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const films_model_1 = require("../films/films.model");
let Image = class Image extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ed61e4f4-e78a-447a-b78b-315be47e7b30.jpg', description: 'Image name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Image.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'films', description: 'Main table name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Image.prototype, "essenceTable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12, description: 'Foreign key' }),
    (0, sequelize_typescript_1.ForeignKey)(() => films_model_1.Film),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Image.prototype, "essenceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, sequelize_typescript_1.BelongsTo)(() => films_model_1.Film),
    __metadata("design:type", films_model_1.Film)
], Image.prototype, "film", void 0);
Image = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'images', updatedAt: false })
], Image);
exports.Image = Image;
//# sourceMappingURL=images.model.js.map