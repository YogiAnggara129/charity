<!-- <script>
	let { children } = $props();
</script> -->

<!-- <div
	class="modal fade show"
	id="exampleModal"
	tabindex="-1"
	role="dialog"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	{@render children?.()}
</div>

<style>
	.show {
		display: none;
		background-color: rgba(0, 0, 0, 0.25);
	}
</style> -->

<script lang="ts">
	import { fade } from "svelte/transition";

	export let open: boolean = false;
	export let title: string = "Modal Title";
	export let onClose: () => void = () => {};

	function handleBackgroundClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (target.classList.contains("modal")) {
			onClose();
		}
	}
</script>

{#if open}
	<div
		class="modal fade show d-block"
		tabindex="0"
		role="dialog"
		aria-modal="true"
		style="background-color: rgba(0,0,0,0.5);"
		on:click={handleBackgroundClick}
		on:keydown={(e) => {
			if (e.key === "Escape") onClose();
		}}
		transition:fade
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content" transition:fade>
				<div class="modal-header">
					<h5 class="modal-title">{title}</h5>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
						on:click={onClose}
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
