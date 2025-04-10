<script lang="ts">
	import type { CharityEntity } from "$lib/domain/charity.entity";
	import CharityCard from "./CharityCard.svelte";

	export let charities: CharityEntity[];
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

			{#if charities.length != 0}
				{#each charities as charity}
					<CharityCard {charity} />
				{/each}
			{/if}
		</div>
		<!-- .container end -->
	</div>
</section>
