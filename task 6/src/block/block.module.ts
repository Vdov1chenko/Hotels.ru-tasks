import { forwardRef, Module } from "@nestjs/common";
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Block } from "./block.model";
import { Group } from "../group/group.model";
import { AuthModule } from "../auth/auth.module";
import { FilesModule } from "../files/files.module";
import { GroupModule } from "../group/group.module";

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [
    SequelizeModule.forFeature([Block, Group]),
    forwardRef(() => AuthModule),
    FilesModule,
    GroupModule
  ]
})
export class BlockModule {}
