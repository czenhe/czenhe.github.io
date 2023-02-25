<script lang="ts">
	import logo from '$lib/images/lion.png';
	import GlobalNav from './GlobalNav.svelte';
	import { locale, locales } from '$lib/locales/i18n';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="lion" width="60" />
			<span>czenhe + me</span>
		</a>
	</div>

	<GlobalNav />

	<select bind:value={$locale}>
		{#each locales as l}
			<option value={l}>{l}</option>
		{/each}
	</select>
</header>

<style lang="scss">
	header {
		display: flex;
		width: 100%;
		padding: 20px 30px;
		box-sizing: border-box;
		align-items: flex-end;
		justify-content: space-between;
	}
	.logo {
		font-family: var(--font-homemade-apple);
		font-size: 1.8rem;
		a {
			display: flex;
			color: var(--color-theme-1);
			align-items: center;

			gap: 20px;
			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
