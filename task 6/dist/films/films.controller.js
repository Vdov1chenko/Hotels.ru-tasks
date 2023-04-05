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
exports.FilmsController = void 0;
const common_1 = require("@nestjs/common");
const films_service_1 = require("./films.service");
const validation_pipe_1 = require("../pipes/validation.pipe");
const swagger_1 = require("@nestjs/swagger");
const films_model_1 = require("./films.model");
const create_film_dto_1 = require("./dto/create.film.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_for_admin_guard_1 = require("../guards/jwt-for-admin.guard");
const films_id_array_dto_1 = require("./dto/films.id.array.dto");
const update_film_dto_1 = require("./dto/update.film.dto");
const make_images_unused_dto_1 = require("./dto/make.images.unused.dto");
let FilmsController = class FilmsController {
    constructor(filmService) {
        this.filmService = filmService;
    }
    getAllFilms() {
        return this.filmService.getAllFilms();
    }
    createFilm(dto, images) {
        return this.filmService.createFilm(dto, images);
    }
    deleteFilmsById(dto) {
        return this.filmService.deleteFilmsById(dto);
    }
    updateFilmDataById(dto, images) {
        return this.filmService.updateFilmDataById(dto, images);
    }
    makeImagesUnusedForFilm(dto) {
        return this.filmService.makeImagesUnusedForFilm(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all films" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [films_model_1.Film], description: "Get all films with their files" }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "getAllFilms", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Add film" }),
    (0, swagger_1.ApiResponse)({ status: 201, type: films_model_1.Film, description: "Add new film to database" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)("create"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("images", 5)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_film_dto_1.CreateFilmDto,
        Array]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "createFilm", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Delete multiple films by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Delete)("/admin/delete"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [films_id_array_dto_1.FilmsIdArrayDto]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "deleteFilmsById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update film data by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)("/admin/updateFilmData"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("images", 5)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_film_dto_1.UpdateFilmDto,
        Array]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "updateFilmDataById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Make images unused for film by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Only for admin" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, jwt_for_admin_guard_1.JwtForAdminGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Put)("/admin/deleteImagesFromFilm"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [make_images_unused_dto_1.MakeImagesUnusedDto]),
    __metadata("design:returntype", void 0)
], FilmsController.prototype, "makeImagesUnusedForFilm", null);
FilmsController = __decorate([
    (0, swagger_1.ApiTags)("Films"),
    (0, common_1.Controller)("films"),
    __metadata("design:paramtypes", [films_service_1.FilmsService])
], FilmsController);
exports.FilmsController = FilmsController;
//# sourceMappingURL=films.controller.js.map