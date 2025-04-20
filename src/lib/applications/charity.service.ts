import "reflect-metadata";
import type CharityRepository from "$lib/domains/repositories/charity.repository";
import TYPES from "$lib/infrastructures/di/types";
import { injectable, inject } from "inversify";
import type { Result } from "$lib/core/base/result";
import type CharityEntity from "$lib/domains/entities/charity.entity";

@injectable()
export default class CharityService {
	constructor(
		@inject(TYPES.CharityRepository)
		private charityRepository: CharityRepository
	) {}

	async getCharities(): Promise<Result<CharityEntity[]>> {
		return await this.charityRepository.getCharities();
	}

	async getCharity(id: number): Promise<Result<CharityEntity>> {
		return await this.charityRepository.getCharity(id);
	}
}
