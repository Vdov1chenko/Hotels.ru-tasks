"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsModule = void 0;
const common_1 = require("@nestjs/common");
const films_service_1 = require("./films.service");
const films_controller_1 = require("./films.controller");
const sequelize_1 = require("@nestjs/sequelize");
const films_model_1 = require("./films.model");
const auth_module_1 = require("../auth/auth.module");
const files_module_1 = require("../files/files.module");
let FilmsModule = class FilmsModule {
};
FilmsModule = __decorate([
    (0, common_1.Module)({
        providers: [films_service_1.FilmsService],
        controllers: [films_controller_1.FilmsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([films_model_1.Film]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            files_module_1.FilesModule
        ],
        exports: [
            films_service_1.FilmsService
        ]
    })
], FilmsModule);
exports.FilmsModule = FilmsModule;
//# sourceMappingURL=films.module.js.map