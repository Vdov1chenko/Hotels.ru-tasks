import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { RegDto } from "./dto/reg.dto";
import { User } from "../users/users.model";
import { CreateUserDto } from "../users/dto/create.user.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags('authorization')
@Controller('/auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary: 'register user'})
  @ApiResponse({status: 200, type: User})
  @UsePipes(ValidationPipe)
  @Post('/registration')
  registerUser(@Body() regDto: RegDto) {
    return this.authService.registerUser(regDto);
  }

  @ApiOperation({summary: 'login user'})
  @ApiResponse({status: 200, type: User})
  @Post('/login')
  loginUser(@Body() userDto: CreateUserDto) {
    return this.authService.loginUser(userDto);
  }
}
