<script context="module" lang="ts">
  import type { BlockToggleListItem } from './notion.types';
</script>

<script lang="ts">
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  export let block: BlockToggleListItem;
</script>

<div class="notion__toggle-list">
  <details class="notion__block-type notion__toggle">
    <summary class="notion__toggle-summary"
      ><NotionBlockRichText block={block.toggle.text} /></summary
    >
  </details>
  {#if block.siblings}
    {#each block.siblings as sibling}
      <details class="notion__block-type notion__toggle">
        <summary class="notion__toggle-summary"
          ><NotionBlockRichText block={sibling.toggle.text} /></summary
        >
      </details>
    {/each}
  {/if}
</div>
