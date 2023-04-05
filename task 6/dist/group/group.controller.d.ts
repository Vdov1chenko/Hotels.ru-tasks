import { GroupService } from "./group.service";
import { Group } from "./group.model";
import { CreateGroupDto } from "./dto/create.group.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { DeleteGroupDto } from "./dto/delete.group.dto";
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getAllGroups(): Promise<Group[]>;
    getGroupByName(searchedGroup: string): Promise<Group[]>;
    updateGroupName(dto: UpdateGroupDto): Promise<void>;
    deleteGroup(dto: DeleteGroupDto): void;
    createGroup(dto: CreateGroupDto): Promise<Group>;
}
