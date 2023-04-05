import { forwardRef, Module } from "@nestjs/common";
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Group } from "./group.model";
import { Block } from "../block/block.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [GroupController],
  providers: [GroupService],
  imports: [
    SequelizeModule.forFeature([Block, Group]),
    forwardRef(() => AuthModule),
  ],
  exports: [GroupService]
})
export class GroupModule {}
