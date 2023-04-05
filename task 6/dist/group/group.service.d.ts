import { Group } from "./group.model";
import { CreateGroupDto } from "./dto/create.group.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { DeleteGroupDto } from "./dto/delete.group.dto";
export declare class GroupService {
    private readonly groupRepository;
    constructor(groupRepository: typeof Group);
    getGroupByName(searchedGroup: any): Promise<Group[]>;
    getAllGroups(): Promise<Group[]>;
    createGroup(dto: CreateGroupDto): Promise<Group>;
    updateGroupName(dto: UpdateGroupDto): Promise<void>;
    deleteGroup(dto: DeleteGroupDto): Promise<void>;
    findGroupById(id: number): Promise<Group>;
}
