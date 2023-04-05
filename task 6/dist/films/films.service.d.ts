/// <reference types="multer" />
import { Film } from "./films.model";
import { CreateFilmDto } from "./dto/create.film.dto";
import { FilesService } from "../files/files.service";
import { FilmsIdArrayDto } from "./dto/films.id.array.dto";
import { UpdateFilmDto } from "./dto/update.film.dto";
import { MakeImagesUnusedDto } from "./dto/make.images.unused.dto";
export declare class FilmsService {
    private readonly filmsRepository;
    private readonly filesService;
    tableName: string;
    constructor(filmsRepository: typeof Film, filesService: FilesService);
    getAllFilms(): Promise<Film[]>;
    createFilm(dto: CreateFilmDto, images: any): Promise<Film>;
    deleteFilmsById(dto: FilmsIdArrayDto): Promise<void>;
    updateFilmDataById(dto: UpdateFilmDto, images: Array<Express.Multer.File>): Promise<void>;
    makeImagesUnusedForFilm(dto: MakeImagesUnusedDto): Promise<void>;
}
