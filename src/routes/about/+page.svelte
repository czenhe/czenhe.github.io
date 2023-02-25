<script lang="ts">
	import { t, locale, locales } from '$lib/locales/i18n';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About czenhe.me" />
</svelte:head>

<div class="text-column">
	<h1>About Czenhe.me</h1>

	<p>{@html $t('about.text1')}</p>
	<p>{@html $t('about.text2')}</p>
	<p>{@html $t('about.text3')}</p>
</div>
