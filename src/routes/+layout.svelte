<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	import { page } from "$app/state";
	import { SvelteToast } from "@zerodevx/svelte-toast";

	import { navigating } from "$app/stores";

	$: isNavigating = !!$navigating;
</script>

{#if isNavigating}
	<div class="loading-overlay">Loading...</div>
{:else}
	{#if page.error == null}
		<Header />
	{/if}
	<slot />
	<Footer />
	<SvelteToast />
{/if}

<style>
	.loading-overlay {
		position: fixed;
		inset: 0;
		background: rgba(255, 255, 255, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		font-size: 1.5rem;
	}
</style>
