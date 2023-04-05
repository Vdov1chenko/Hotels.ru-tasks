import { forwardRef, Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Profile } from "./profile.model";
import { User } from "../users/users.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    SequelizeModule.forFeature([Profile, User]),
    forwardRef(() => AuthModule)
  ],
  exports: [ProfileService]
})
export class ProfileModule {
}
