import { Body, Controller, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create.profile.dto";
import { Profile } from "./profile.model";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { UserIdGuard } from "../guards/user-id.guard";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags("Profile")
@Controller("/user/profile")
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {
  }

  @ApiOperation({ summary: "Updating profile data" })
  @ApiResponse({ status: 200, description: 'User changes his profile' })
  @UseGuards(JwtAuthGuard, UserIdGuard)
  @UsePipes(ValidationPipe)
  @Put()
  updateCurrentUserProfile(@Body() profileDto: CreateProfileDto) {
    return this.profileService.updateProfile(profileDto);
  }

  @ApiOperation({ summary: "Updating profile data by user id" })
  @ApiResponse({ status: 200, description: 'Change profile by id (for admin)' })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Put('/admin')
  updateProfileById(@Body() profileDto: CreateProfileDto) {
    return this.profileService.updateProfile(profileDto);
  }

}
