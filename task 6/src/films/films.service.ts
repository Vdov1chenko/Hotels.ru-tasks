import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Film } from "./films.model";
import { CreateFilmDto } from "./dto/create.film.dto";
import { FilesService } from "../files/files.service";
import { FilmsIdArrayDto } from "./dto/films.id.array.dto";
import { UpdateFilmDto } from "./dto/update.film.dto";
import { MakeImagesUnusedDto } from "./dto/make.images.unused.dto";

@Injectable()
export class FilmsService {
  tableName: string = "films"

  constructor(@InjectModel(Film) private readonly filmsRepository: typeof Film,
              private readonly filesService: FilesService) {
  }

  async getAllFilms() {
    const films = await this.filmsRepository.findAll({ include: { all: true } });
    return films;
  }

  async createFilm(dto: CreateFilmDto, images) {
    try {
      const film = await this.filmsRepository.create(dto);

      const filmId: number = film.id;

      await this.filesService.createFileInEssenceTable(filmId, this.tableName, images);
      return await this.filmsRepository.findByPk(filmId, { include: { all: true } });

    } catch (e) {
      throw new HttpException("Field with this name already exists", HttpStatus.BAD_REQUEST);
    }

  }

  async deleteFilmsById(dto: FilmsIdArrayDto) {
    for (let id of dto.idArray) {
      await this.filmsRepository.destroy({ where: { id: id } });

    }

  }

  async updateFilmDataById(dto: UpdateFilmDto, images: Array<Express.Multer.File>) {
    const film = await this.filmsRepository.findByPk(dto.id, {include: { all: true }});

    try {
      for (let key in dto) {
        if (dto[key] && key !== "id") {
          film[key] = dto[key];
        }

      }
      await film.save();
    } catch (e) {
      throw new HttpException('Film with the same name already exists.', HttpStatus.BAD_REQUEST)
    }

    if (images && images.length <= (this.filesService.MAX_IMAGES - film.images.length)) {
      await this.filesService.createFileInEssenceTable(dto.id, this.tableName, images);
    } else {
      throw new HttpException(`The maximum number of images is 5. already uploaded ${film.images.length} images`, HttpStatus.BAD_REQUEST)
    }

  }

  async makeImagesUnusedForFilm(dto: MakeImagesUnusedDto) {
    const film = await this.filmsRepository.findByPk(dto.id)
    if (!film) {
      throw new HttpException('There is no film with this id', HttpStatus.BAD_REQUEST)
    }

    const images = await this.filesService.makeImageUnused(dto.idArray)
    return images

  }
}
