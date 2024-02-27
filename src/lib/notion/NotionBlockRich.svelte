<script context="module" lang="ts">
  import type { BlockRichText } from './notion.types';
</script>

<script lang="ts">
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  export let block: Array<BlockRichText>;
</script>

<p class="notion__block-type notion__rich">
  <NotionBlockRichText {block} />
</p>

<style lang="scss">
  .notion__rich {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
  }
</style>
