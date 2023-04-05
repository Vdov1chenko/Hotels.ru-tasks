import { Body, Controller, Delete, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FilesService } from "./files.service";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";
import { ValidationPipe } from "../pipes/validation.pipe";
import { UsersIdArrayDto } from "../users/dto/users.id.array.dto";

@ApiTags('Files')
@Controller('files')
export class FilesController {

  constructor(private readonly filesService: FilesService) {}

  @ApiOperation({ summary: "Remove unused images" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Delete("/delete/unused")
  deleteUnusedImages() {
    return this.filesService.deleteUnusedImages();
  }

  @ApiOperation({ summary: "Delete images created an hour ago" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Delete("/delete/hourago")
  deleteImagesCreatedAnHourAgo() {
    return this.filesService.deleteImagesCreatedAnHourAgo();
  }

}
