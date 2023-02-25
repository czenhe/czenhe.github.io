<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Welcome to Czenhe.me</h1>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		flex: 0.6;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		display: block;
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
