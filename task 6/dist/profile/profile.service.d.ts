import { Profile } from "./profile.model";
import { CreateProfileDto } from "./dto/create.profile.dto";
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: typeof Profile);
    createProfile(dto: CreateProfileDto): Promise<Profile>;
    updateProfile(dto: CreateProfileDto): Promise<void>;
}
