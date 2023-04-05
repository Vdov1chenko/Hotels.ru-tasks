import { Injectable } from '@nestjs/common';
import {Profile} from "./profile.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateProfileDto} from "./dto/create.profile.dto";

@Injectable()
export class ProfileService {

	constructor(@InjectModel(Profile) private profileRepository: typeof Profile) {}

	async createProfile(dto: CreateProfileDto) {
		const profile = await this.profileRepository.create(dto)
		return profile
	}

	async updateProfile(dto: CreateProfileDto) {
		const profile = await this.profileRepository.findByPk(dto.id)
		for (let key in dto) {

			if (dto[key] && key !== 'id') {

				profile[key] = dto[key];

			}

		}
		await profile.save()
	}

}
