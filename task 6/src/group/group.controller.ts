import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { GroupService } from "./group.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { JwtForAdminGuard } from "../guards/jwt-for-admin.guard";
import { Group } from "./group.model";
import { CreateGroupDto } from "./dto/create.group.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { ValidationPipe } from "../pipes/validation.pipe";
import { DeleteGroupDto } from "./dto/delete.group.dto";

@ApiTags("Group")
@Controller("group")
export class GroupController {

  constructor(private readonly groupService: GroupService) {
  }

  @ApiOperation({ summary: "Get all groups" })
  @ApiResponse({ status: 200, type: [Group], description: "Get all groups. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Get()
  getAllGroups() {
    const groups = this.groupService.getAllGroups();
    return groups;
  }

  @ApiOperation({ summary: "Get group by name" })
  @ApiResponse({ status: 200, type: Group, description: "Get group by name. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @Get(':searchedGroup')
  getGroupByName(@Param('searchedGroup') searchedGroup: string) {
    const groups = this.groupService.getGroupByName(searchedGroup);
    return groups;
  }

  @ApiOperation({ summary: "Update group name" })
  @ApiResponse({ status: 200, description: "Update group name by id. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Put()
  updateGroupName(@Body() dto: UpdateGroupDto) {
    const groups = this.groupService.updateGroupName(dto);
    return groups;
  }

  @ApiOperation({ summary: "delete group by id" })
  @ApiResponse({ status: 200, description: "Delete group name by id. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Delete()
  deleteGroup(@Body() dto: DeleteGroupDto) {
    this.groupService.deleteGroup(dto);
  }

  @ApiOperation({ summary: "Create new group" })
  @ApiResponse({ status: 200, type: Group, description: "Creation new Group. Only for admin" })
  @UseGuards(JwtAuthGuard, JwtForAdminGuard)
  @UsePipes(ValidationPipe)
  @Post("/create")
  createGroup(@Body() dto: CreateGroupDto) {
    const group = this.groupService.createGroup(dto)
    return group
  }

}
