<script lang="ts">
	export let size: number = 32;
	export let color: string = "#2563eb"; // Tailwind blue-600
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 100 100"
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	class="animate-spin"
>
	<circle
		cx="50"
		cy="50"
		r="40"
		stroke={color}
		stroke-width="10"
		stroke-dasharray="188.4"
		stroke-dashoffset="94.2"
		stroke-linecap="round"
	/>
</svg>

<style>
	.animate-spin {
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
