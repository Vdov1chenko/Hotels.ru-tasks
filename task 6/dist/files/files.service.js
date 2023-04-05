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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const sequelize_1 = require("@nestjs/sequelize");
const images_model_1 = require("./images.model");
const sequelize_2 = require("sequelize");
let FilesService = class FilesService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
        this.MAX_IMAGES = 5;
        this.STATIC_PATH = path.resolve(__dirname, "..", "static");
    }
    async createFile(file) {
        try {
            const fileName = uuid.v4() + ".jpg";
            if (!fs.existsSync(this.STATIC_PATH)) {
                fs.mkdirSync(this.STATIC_PATH, { recursive: true });
            }
            fs.writeFileSync(path.join(this.STATIC_PATH, fileName), file.buffer);
            return fileName;
        }
        catch (err) {
            throw new common_1.HttpException("An error occurred while writing the file.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createFileInEssenceTable(filmId, tableName, images) {
        for (let image of images) {
            const imageName = await this.createFile(image);
            await this.imageRepository.create({
                image: imageName,
                essenceId: filmId,
                essenceTable: tableName
            });
        }
    }
    async deleteUnusedImages() {
        const images = await this.imageRepository.findAll({
            where: {
                essenceId: null
            },
            attributes: ["image"]
        });
        await this.deleteFilesFromStatic(images);
        await this.imageRepository.destroy({ where: { essenceId: null } });
    }
    async deleteImagesCreatedAnHourAgo() {
        const images = await this.imageRepository.findAll({
            where: {
                createdAt: {
                    [sequelize_2.Op.lt]: +new Date() - 1000 * 60 * 60
                }
            },
            attributes: ["image"]
        });
        await this.deleteFilesFromStatic(images);
        await this.imageRepository.destroy({
            where: {
                createdAt: {
                    [sequelize_2.Op.lt]: +new Date() - 1000 * 60 * 60
                }
            }
        });
    }
    async makeImageUnused(idArray) {
        let images = await this.imageRepository.findAll({ where: { id: { [sequelize_2.Op.in]: idArray } } });
        for (let image of images) {
            image.essenceId = null;
            await image.save();
        }
    }
    async deleteFilesFromStatic(images) {
        for (let image of images) {
            try {
                fs.unlinkSync(path.join(this.STATIC_PATH, image.image));
            }
            catch (_a) {
            }
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(images_model_1.Image)),
    __metadata("design:paramtypes", [Object])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map