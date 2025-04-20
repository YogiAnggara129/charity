<script lang="ts">
	import type CharityEntity from "$lib/domains/entities/charity.entity";
	import { onMount } from "svelte";
	import { matchResult, type Result } from "$lib/core/base/result";
	import { toast } from "@zerodevx/svelte-toast";
	import CharityCard from "./CharityCard.svelte";
	import container from "$lib/infrastructures/di/container";
	import CharityService from "$lib/applications/charity.service";
	import Loading from "./Loading.svelte";

	const charities: CharityEntity[] = [];
	let isLoading: boolean = true;

	onMount(async () => {
		isLoading = true;
		const result: Result<CharityEntity[]> = await container
			.get(CharityService)
			.getCharities();
		isLoading = false;

		matchResult(result, {
			success: (value) => {
				charities.length = 0;
				charities.push(...value);
			},
			failed: (message) => toast.push(message),
		});
	});
</script>

<section id="popularcause" class="bg-gray waypoint-tigger xs-section-padding">
	<div class="container">
		<div class="xs-heading row xs-mb-60">
			<div class="col-md-9 col-xl-9">
				<h2 class="xs-title">Popular Causes</h2>
				<span class="xs-separetor dashed"></span>
				<p>
					FundPress has built a platform focused on aiding entrepreneurs,
					startups, and <br /> companies raise capital from anyone.
				</p>
			</div>
			<!-- .xs-heading-title END -->

			{#if isLoading}
				<div class="flex justify-center items-center h-100 w-100">
					<Loading size={48} />
				</div>
			{:else if charities.length != 0}
				{#each charities as charity}
					<CharityCard {charity} />
				{/each}
			{/if}
		</div>
		<!-- .container end -->
	</div>
</section>
