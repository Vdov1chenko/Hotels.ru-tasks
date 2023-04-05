import { CreateBlockDto } from "./dto/create.block.dto";
import { Block } from "./block.model";
import { FilesService } from "../files/files.service";
import { GroupService } from "../group/group.service";
import { DeleteBlockDto } from "./dto/delete.block.dto";
import { UpdateBlockDto } from "./dto/update.block.dto";
export declare class BlockService {
    private readonly blockRepository;
    private readonly filesService;
    private readonly groupService;
    constructor(blockRepository: typeof Block, filesService: FilesService, groupService: GroupService);
    createBlock(dto: CreateBlockDto, image: any): Promise<Block>;
    deleteBlock(dto: DeleteBlockDto): Promise<void>;
    updateBlock(dto: UpdateBlockDto, image: any): Promise<void>;
    getBlock(blockName: string): Promise<Block[]>;
}
