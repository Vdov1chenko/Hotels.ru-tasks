import { Image } from "./images.model";
export declare class FilesService {
    private readonly imageRepository;
    MAX_IMAGES: number;
    STATIC_PATH: string;
    constructor(imageRepository: typeof Image);
    createFile(file: any): Promise<string>;
    createFileInEssenceTable(filmId: any, tableName: any, images: any): Promise<void>;
    deleteUnusedImages(): Promise<void>;
    deleteImagesCreatedAnHourAgo(): Promise<void>;
    makeImageUnused(idArray: Array<number>): Promise<void>;
    deleteFilesFromStatic(images: any): Promise<void>;
}
