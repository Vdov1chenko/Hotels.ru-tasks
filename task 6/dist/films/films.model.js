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
exports.Film = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const images_model_1 = require("../files/images.model");
let Film = class Film extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary key" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Film.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Green mile', description: 'Films name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Film.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1993, description: 'Films year' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Film.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of Images' }),
    (0, sequelize_typescript_1.HasMany)(() => images_model_1.Image, { foreignKey: "essenceId",
        constraints: false, scope: { essenceTable: "films" } }),
    __metadata("design:type", Array)
], Film.prototype, "images", void 0);
Film = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'films' })
], Film);
exports.Film = Film;
//# sourceMappingURL=films.model.js.map