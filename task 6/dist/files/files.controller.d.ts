import { FilesService } from "./files.service";
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    deleteUnusedImages(): Promise<void>;
    deleteImagesCreatedAnHourAgo(): Promise<void>;
}
