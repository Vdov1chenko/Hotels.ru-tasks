"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const users_model_1 = require("./users/users.model");
const profile_module_1 = require("./profile/profile.module");
const profile_model_1 = require("./profile/profile.model");
const auth_module_1 = require("./auth/auth.module");
const block_module_1 = require("./block/block.module");
const group_module_1 = require("./group/group.module");
const group_model_1 = require("./group/group.model");
const block_model_1 = require("./block/block.model");
const files_module_1 = require("./files/files.module");
const serve_static_1 = require("@nestjs/serve-static");
const films_module_1 = require("./films/films.module");
const path = require("path");
const films_model_1 = require("./films/films.model");
const images_model_1 = require("./files/images.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `./${process.env.NODE_ENV}.env`
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, "static")
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: +process.env.POSTGRES_PORT,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                schema: process.env.POSTGRES_SCHEMA,
                autoLoadModels: true,
                models: [users_model_1.User, profile_model_1.Profile, block_model_1.Block, group_model_1.Group, films_model_1.Film, images_model_1.Image]
            }),
            users_module_1.UsersModule,
            profile_module_1.ProfileModule,
            auth_module_1.AuthModule,
            block_module_1.BlockModule,
            group_module_1.GroupModule,
            files_module_1.FilesModule,
            films_module_1.FilmsModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map