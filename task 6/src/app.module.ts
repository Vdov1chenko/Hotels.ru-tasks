import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { ProfileModule } from "./profile/profile.module";
import { Profile } from "./profile/profile.model";
import { AuthModule } from "./auth/auth.module";
import { BlockModule } from "./block/block.module";
import { GroupModule } from "./group/group.module";
import { Group } from "./group/group.model";
import { Block } from "./block/block.model";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FilmsModule } from "./films/films.module";
import * as path from "path";
import { Film } from "./films/films.model";
import { Image } from "./files/images.model";

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static")
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      schema: process.env.POSTGRES_SCHEMA,
      autoLoadModels: true,
      models: [User, Profile, Block, Group, Film, Image]
    }),
    UsersModule,
    ProfileModule,
    AuthModule,
    BlockModule,
    GroupModule,
    FilesModule,
    FilmsModule
  ]
})

export class AppModule {
}