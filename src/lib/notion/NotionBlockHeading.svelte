<script context="module" lang="ts">
  import type { BlockHeading, BlockHeadingType } from './notion.types';
</script>

<script lang="ts">
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  export let block: BlockHeading;
  export let type: BlockHeadingType = 'heading_3';
</script>

{#if type === 'heading_1'}
  <h1 class="notion__block-type notion__heading notion__heading--h1">
    <NotionBlockRichText block={block.rich_text} />
  </h1>
{:else if type === 'heading_2'}
  <h2 class="notion__block-type notion__heading notion__heading--h2">
    <NotionBlockRichText block={block.rich_text} />
  </h2>
{:else}
  <h3 class="notion__block-type notion__heading notion__heading--h3">
    <NotionBlockRichText block={block.rich_text} />
  </h3>
{/if}

<style lang="scss">
  .notion__heading {
    font-weight: 700;
  }
  h1.notion__heading--h1 {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
  }
  h2.notion__heading--h2 {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }
  h3.notion__heading--h3 {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }
</style>
