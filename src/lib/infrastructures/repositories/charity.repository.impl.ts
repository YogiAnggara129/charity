import { Failed, Success, type Result } from "$lib/core/base/result";
import CharityEntity from "$lib/domains/entities/charity.entity";
import type CharityRepository from "$lib/domains/repositories/charity.repository";
import { injectable } from "inversify";

@injectable()
export default class CharityRepositoryImpl implements CharityRepository {
	charities: CharityEntity[] = [
		new CharityEntity(
			1,
			"First Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,

			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			2,
			"Second Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			3,
			"Third Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
		new CharityEntity(
			4,
			"Fourth Charity Project",
			"Money",
			"https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png",
			5000,
			100000,
			new Date("10 August 2020"),
			"https://www.shutterstock.com/image-photo/happy-older-business-man-executive-260nw-2362307153.jpg",
			"Viroide Bueno",
			0
		),
	];

	async getCharities(): Promise<Result<CharityEntity[]>> {
		await new Promise((resolve) => setTimeout(resolve, 500));
		return new Success(this.charities);
		// return new Failed("Failed to get charities");
	}

	async getCharity(id: number): Promise<Result<CharityEntity>> {
		await new Promise((resolve) => setTimeout(resolve, 500));
		let data = this.charities.filter((e) => e.id == id);
		if (data.length == 0) {
			return new Failed("Charity not found");
		}
		return new Success(data[0]);
	}
}
