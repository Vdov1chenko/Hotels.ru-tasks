/// <reference types="multer" />
import { FilmsService } from "./films.service";
import { Film } from "./films.model";
import { CreateFilmDto } from "./dto/create.film.dto";
import { FilmsIdArrayDto } from "./dto/films.id.array.dto";
import { UpdateFilmDto } from "./dto/update.film.dto";
import { MakeImagesUnusedDto } from "./dto/make.images.unused.dto";
export declare class FilmsController {
    private readonly filmService;
    constructor(filmService: FilmsService);
    getAllFilms(): Promise<Film[]>;
    createFilm(dto: CreateFilmDto, images: Array<Express.Multer.File>): Promise<Film>;
    deleteFilmsById(dto: FilmsIdArrayDto): Promise<void>;
    updateFilmDataById(dto: UpdateFilmDto, images: Array<Express.Multer.File>): Promise<void>;
    makeImagesUnusedForFilm(dto: MakeImagesUnusedDto): Promise<void>;
}
