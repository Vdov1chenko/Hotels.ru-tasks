import { forwardRef, Module } from "@nestjs/common";
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Film } from "./films.model";
import { AuthModule } from "../auth/auth.module";
import { FilesModule } from "../files/files.module";

@Module({
  providers: [FilmsService],
  controllers: [FilmsController],
  imports: [
    SequelizeModule.forFeature([Film]),
    forwardRef(() => AuthModule),
    FilesModule
  ],
  exports: [
    FilmsService
  ]
})
export class FilmsModule {}
