import {
  Body,
  Controller, Delete,
  Get,
  Post, Put,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { FilmsService } from "./films.service";
import { ValidationPipe } from "../pipes/validation.pipe";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Film } from "./films.model";
import { CreateFilmDto } from "./dto/create.film.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { FilesInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";
import { FilmsIdArrayDto } from "./dto/films.id.array.dto";
import { UpdateFilmDto } from "./dto/update.film.dto";
import { MakeImagesUnusedDto } from "./dto/make.images.unused.dto";

@ApiTags("Films")
@Controller("films")
export class FilmsController {

  constructor(private readonly filmService: FilmsService) {
  }

  @ApiOperation({ summary: "Get all films" })
  @ApiResponse({ status: 200, type: [Film], description: "Get all films with their files" })
  @UsePipes(ValidationPipe)
  @Get()
  getAllFilms() {
    return this.filmService.getAllFilms();
  }

  @ApiOperation({ summary: "Add film" })
  @ApiResponse({ status: 201, type: Film, description: "Add new film to database" })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post("create")
  @UseInterceptors(FilesInterceptor("images", 5))
  createFilm(@Body() dto: CreateFilmDto,
             @UploadedFiles() images: Array<Express.Multer.File>) {

    return this.filmService.createFilm(dto, images);
  }

  @ApiOperation({ summary: "Delete multiple films by id" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Delete("/admin/delete")
  deleteFilmsById(@Body() dto: FilmsIdArrayDto) {
    return this.filmService.deleteFilmsById(dto);
  }

  @ApiOperation({ summary: "Update film data by id" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Put("/admin/updateFilmData")
  @UseInterceptors(FilesInterceptor("images", 5))
  updateFilmDataById(@Body() dto: UpdateFilmDto,
                     @UploadedFiles() images: Array<Express.Multer.File>) {
    return this.filmService.updateFilmDataById(dto, images);
  }

  @ApiOperation({ summary: "Make images unused for film by id" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Put("/admin/deleteImagesFromFilm")
  makeImagesUnusedForFilm(@Body() dto: MakeImagesUnusedDto) {
    return this.filmService.makeImagesUnusedForFilm(dto);
  }
}
