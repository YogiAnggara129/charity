<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	import { page } from "$app/state";
	import { SvelteToast } from "@zerodevx/svelte-toast";
</script>

{#if page.error == null}
	<Header />
{/if}
<slot />
<Footer />
<SvelteToast />
