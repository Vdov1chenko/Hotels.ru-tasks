import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create.profile.dto";
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    updateCurrentUserProfile(profileDto: CreateProfileDto): Promise<void>;
    updateProfileById(profileDto: CreateProfileDto): Promise<void>;
}
