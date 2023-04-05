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
exports.CreateProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProfileDto {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Foreign key references user id' }),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'Users name' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Users surname' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '89456523636', description: 'Users phone-number' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1975-03-22', description: 'Users birthday' }),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Is the user an admin' }),
    __metadata("design:type", Boolean)
], CreateProfileDto.prototype, "isAdmin", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=create.profile.dto.js.map