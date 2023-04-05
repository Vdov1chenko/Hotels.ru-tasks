import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";
import { InjectModel } from "@nestjs/sequelize";
import { Image } from "./images.model";
import { Op } from "sequelize";

@Injectable()
export class FilesService {
  MAX_IMAGES: number = 5;
  STATIC_PATH: string = path.resolve(__dirname, "..", "static");

  constructor(@InjectModel(Image) private readonly imageRepository: typeof Image) {
  }

  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + ".jpg";

      if (!fs.existsSync(this.STATIC_PATH)) {
        fs.mkdirSync(this.STATIC_PATH, { recursive: true });
      }

      fs.writeFileSync(path.join(this.STATIC_PATH, fileName), file.buffer);

      return fileName;

    } catch (err) {
      throw new HttpException("An error occurred while writing the file.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async createFileInEssenceTable(filmId, tableName, images) {
    for (let image of images) {
      const imageName: string = await this.createFile(image);
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
          [Op.lt]: +new Date() - 1000 * 60 * 60
        }
      },
      attributes: ["image"]
    });

    await this.deleteFilesFromStatic(images);

    await this.imageRepository.destroy({
      where: {
        createdAt: {
          [Op.lt]: +new Date() - 1000 * 60 * 60
        }
      }
    });

  }

  async makeImageUnused(idArray: Array<number>) {
    let images = await this.imageRepository.findAll({ where: { id: { [Op.in]: idArray } } });
    for (let image of images) {
      image.essenceId = null;
      await image.save();
    }

  }

  async deleteFilesFromStatic(images) {
    for (let image of images) {
      try {
        fs.unlinkSync(path.join(this.STATIC_PATH, image.image));
      } catch {
      }
    }
  }
}
