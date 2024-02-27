<script context="module" lang="ts">
  import type { BlockNumberedListItem } from './notion.types';
</script>

<script lang="ts">
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  export let block: BlockNumberedListItem;
</script>

<ol class="notion__block-type notion__numbered-list">
  <li class="notion__numbered-list-item">
    <NotionBlockRichText block={block.numbered_list_item.text} />
  </li>
  {#if block.siblings}
    {#each block.siblings as sibling}
      <li class="notion__numbered-list-item">
        <NotionBlockRichText block={sibling.numbered_list_item.text} />
      </li>
    {/each}
  {/if}
</ol>

<style lang="scss">
  .notion__numbered-list {
    list-style-type: decimal;
  }
</style>
