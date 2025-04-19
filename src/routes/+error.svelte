<script>
	export let status;
	export let error;
</script>

<section class="notfound-section">
	<div class="notfound-wrapper">
		<h1 class="notfound-status">{status}</h1>
		<h2 class="notfound-title">Oops! Page not found</h2>
		<p class="notfound-message">
			{error?.message ??
				"The page you are looking for might have been removed or is temporarily unavailable."}
		</p>
		<a href="/" class="notfound-btn">Back to Homepage</a>
	</div>
</section>

<style>
	.notfound-section {
		background: #f9fafc;
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 1rem;
	}

	.notfound-wrapper {
		text-align: center;
		max-width: 600px;
	}

	.notfound-status {
		font-size: 6rem;
		font-weight: bold;
		color: #00c8aa;
		margin-bottom: 0.5rem;
	}

	.notfound-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1b1c57;
		margin-bottom: 1rem;
	}

	.notfound-message {
		color: #6b7280;
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}

	.notfound-btn {
		display: inline-block;
		background-color: #00c8aa;
		color: #fff;
		padding: 0.75rem 1.75rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.notfound-btn:hover {
		background-color: #00b09a;
	}
</style>
