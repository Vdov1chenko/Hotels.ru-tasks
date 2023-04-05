import { Controller, Get, Body, UseGuards, Delete, Put, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { UsersIdArrayDto } from "./dto/users.id.array.dto";
import { UserIdGuard } from "../guards/user-id.guard";
import { DeleteCurrentUserDto } from "./dto/delete.current.user.dto";
import { ChangeLoginPasswordDto } from "./dto/change.login.password.dto";
import { ValidationPipe } from "../pipes/validation.pipe";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";


@ApiTags("User для работы с юзерами")
@Controller("user")
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User], description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Get("/admin")
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: "Delete multiple users" })
  @ApiResponse({ status: 200, description: "Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Delete("/admin")
  deleteUsersById(@Body() dto: UsersIdArrayDto) {
    return this.userService.deleteUsersById(dto);
  }

  @ApiOperation({ summary: "Delete users by id" })
  @ApiResponse({ status: 200, description: "User deletes his profile" })
  @UseGuards(JwtAuthGuard, UserIdGuard)
  @UsePipes(ValidationPipe)
  @Delete()
  deleteCurrentUser(@Body() dto: DeleteCurrentUserDto) {
    return this.userService.deleteCurrentUser(dto);
  }

  @ApiOperation({ summary: "Change login and password" })
  @ApiResponse({ status: 200, description: "User changes the login and password from his profile" })
  @UseGuards(JwtAuthGuard, UserIdGuard)
  @UsePipes(ValidationPipe)
  @Put()
  changeUserLoginPassword(@Body() dto: ChangeLoginPasswordDto) {
    return this.userService.changeUserLoginPassword(dto);
  }

}
