import type { Result } from "$lib/core/base/result";
import type CharityEntity from "../entities/charity.entity";

export default interface CharityRepository {
	getCharities(): Promise<Result<CharityEntity[]>>;
	getCharity(id: number): Promise<Result<CharityEntity>>;
}
