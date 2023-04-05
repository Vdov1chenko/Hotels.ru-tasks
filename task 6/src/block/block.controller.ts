import {
  Body,
  Controller,
  Delete,
  Get, Param,
  Post, Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BlockService } from "./block.service";
import { CreateBlockDto } from "./dto/create.block.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { ValidationPipe } from "../pipes/validation.pipe";
import { DeleteBlockDto } from "./dto/delete.block.dto";
import { UpdateBlockDto } from "./dto/update.block.dto";

@ApiTags('Block')
@Controller('block')
export class BlockController {

  constructor(private readonly blockService: BlockService) {}

  @ApiOperation({ summary: "Update block data" })
  @ApiResponse({ status: 200, description: "Update block data by id. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Put()
  @UseInterceptors(FileInterceptor('image'))
  updateBlock(@Body() dto: UpdateBlockDto,
              @UploadedFile() image) {
    const block = this.blockService.updateBlock(dto, image);
    return block;
  }

  @ApiOperation({ summary: "Get block by name" })
  @ApiResponse({ status: 200, description: "Get block by name. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Get(':blockName')
  getBlock(@Param('blockName') blockName: string) {
    console.log(blockName)
    const block = this.blockService.getBlock(blockName);
    return block;
  }

  @ApiOperation({ summary: "delete blocks by id" })
  @ApiResponse({ status: 200, description: "Delete block by id. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Delete()
  deleteGroup(@Body() dto: DeleteBlockDto) {
    this.blockService.deleteBlock(dto);
  }

  @ApiOperation({ summary: "Create new block" })
  @ApiResponse({ status: 200, description: "Create new block. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  createBlock(@Body() dto: CreateBlockDto,
              @UploadedFile() image) {
    const block = this.blockService.createBlock(dto, image)
    return block
  }
}
