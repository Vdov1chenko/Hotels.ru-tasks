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
exports.FilmsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const films_model_1 = require("./films.model");
const files_service_1 = require("../files/files.service");
let FilmsService = class FilmsService {
    constructor(filmsRepository, filesService) {
        this.filmsRepository = filmsRepository;
        this.filesService = filesService;
        this.tableName = "films";
    }
    async getAllFilms() {
        const films = await this.filmsRepository.findAll({ include: { all: true } });
        return films;
    }
    async createFilm(dto, images) {
        try {
            const film = await this.filmsRepository.create(dto);
            const filmId = film.id;
            await this.filesService.createFileInEssenceTable(filmId, this.tableName, images);
            return await this.filmsRepository.findByPk(filmId, { include: { all: true } });
        }
        catch (e) {
            throw new common_1.HttpException("Field with this name already exists", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteFilmsById(dto) {
        for (let id of dto.idArray) {
            await this.filmsRepository.destroy({ where: { id: id } });
        }
    }
    async updateFilmDataById(dto, images) {
        const film = await this.filmsRepository.findByPk(dto.id, { include: { all: true } });
        try {
            for (let key in dto) {
                if (dto[key] && key !== "id") {
                    film[key] = dto[key];
                }
            }
            await film.save();
        }
        catch (e) {
            throw new common_1.HttpException('Film with the same name already exists.', common_1.HttpStatus.BAD_REQUEST);
        }
        if (images && images.length <= (this.filesService.MAX_IMAGES - film.images.length)) {
            await this.filesService.createFileInEssenceTable(dto.id, this.tableName, images);
        }
        else {
            throw new common_1.HttpException(`The maximum number of images is 5. already uploaded ${film.images.length} images`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async makeImagesUnusedForFilm(dto) {
        const film = await this.filmsRepository.findByPk(dto.id);
        if (!film) {
            throw new common_1.HttpException('There is no film with this id', common_1.HttpStatus.BAD_REQUEST);
        }
        const images = await this.filesService.makeImageUnused(dto.idArray);
        return images;
    }
};
FilmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(films_model_1.Film)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], FilmsService);
exports.FilmsService = FilmsService;
//# sourceMappingURL=films.service.js.map