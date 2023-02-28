<script lang="ts">
	import { logEvent } from 'histoire/client';
	import type { Hst } from '@histoire/plugin-svelte';
	import LocaleSwitch from './LocaleSwitch.svelte';
	export let Hst: Hst;
</script>

<Hst.Story title="LocaleSwitch" layout={{ type: 'single', iframe: true }}>
	<Hst.Variant title="default">
		<LocaleSwitch />🚗</Hst.Variant
	>
	<Hst.Variant title="Fast">🏎️</Hst.Variant>
	<Hst.Variant title="Slow">🚜</Hst.Variant>
</Hst.Story>

<style>
</style>
