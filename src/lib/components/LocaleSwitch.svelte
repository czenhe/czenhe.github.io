<script>
	import { locale, locales } from '$lib/locales/i18n';
</script>

<select bind:value={$locale}>
	{#each locales as l}
		<option value={l}>{l}</option>
	{/each}
</select>

<style lang="scss"></style>
