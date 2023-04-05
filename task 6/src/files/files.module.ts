import { forwardRef, Module } from "@nestjs/common";
import { FilesService } from './files.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Image } from "./images.model";
import { FilesController } from './files.controller';
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [FilesService],
  exports: [FilesService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Image])
  ],
  controllers: [FilesController]
})
export class FilesModule {}
