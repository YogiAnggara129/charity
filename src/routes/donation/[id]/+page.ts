import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type CharityEntity from "$lib/domains/entities/charity.entity";
import { matchResult, type Result } from "$lib/core/base/result";
import CharityService from "$lib/applications/charity.service";
import container from "$lib/infrastructures/di/container";

export const load: PageLoad = async ({ params }) => {
	let charity: any;
	const id = Number(params.id);
	const result: Result<CharityEntity> = await container
		.get(CharityService)
		.getCharity(id);

	matchResult(result, {
		success: (value) => {
			charity = value.toJson();
		},
		failed: (message) => {
			throw error(404, message);
		},
	});

	console.log(charity);

	return { charity };
};
