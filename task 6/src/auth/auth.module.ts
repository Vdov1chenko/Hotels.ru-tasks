import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfileModule } from "../profile/profile.module";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { GroupModule } from "../group/group.module";
import { BlockModule } from "../block/block.module";
import { FilmsModule } from "../films/films.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    forwardRef(() => ProfileModule),
    forwardRef(() => GroupModule),
    forwardRef(() => BlockModule),
    forwardRef(() => FilmsModule),
    JwtModule.register({
      secret: process.env.SECRET || 'THIS_IS_SECRET',
      signOptions: {
        expiresIn: process.env.EXPIRES_IN || '24h'
      }
    })
  ],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}


