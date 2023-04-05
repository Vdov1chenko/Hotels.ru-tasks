import { BlockService } from "./block.service";
import { CreateBlockDto } from "./dto/create.block.dto";
import { DeleteBlockDto } from "./dto/delete.block.dto";
import { UpdateBlockDto } from "./dto/update.block.dto";
export declare class BlockController {
    private readonly blockService;
    constructor(blockService: BlockService);
    updateBlock(dto: UpdateBlockDto, image: any): Promise<void>;
    getBlock(blockName: string): Promise<import("./block.model").Block[]>;
    deleteGroup(dto: DeleteBlockDto): void;
    createBlock(dto: CreateBlockDto, image: any): Promise<import("./block.model").Block>;
}
