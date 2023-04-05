"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockModule = void 0;
const common_1 = require("@nestjs/common");
const block_controller_1 = require("./block.controller");
const block_service_1 = require("./block.service");
const sequelize_1 = require("@nestjs/sequelize");
const block_model_1 = require("./block.model");
const group_model_1 = require("../group/group.model");
const auth_module_1 = require("../auth/auth.module");
const files_module_1 = require("../files/files.module");
const group_module_1 = require("../group/group.module");
let BlockModule = class BlockModule {
};
BlockModule = __decorate([
    (0, common_1.Module)({
        controllers: [block_controller_1.BlockController],
        providers: [block_service_1.BlockService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([block_model_1.Block, group_model_1.Group]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            files_module_1.FilesModule,
            group_module_1.GroupModule
        ]
    })
], BlockModule);
exports.BlockModule = BlockModule;
//# sourceMappingURL=block.module.js.map