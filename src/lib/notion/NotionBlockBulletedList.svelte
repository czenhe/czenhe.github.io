<script context="module" lang="ts">
  import type { BlockBulletedListItem } from './notion.types';
</script>

<script lang="ts">
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  export let block: BlockBulletedListItem;
</script>

<ul class="notion__block-type notion__bulleted-list">
  <li class="notion__bulleted-list-item">
    <NotionBlockRichText block={block.bulleted_list_item.text} />
  </li>
  {#if block.siblings}
    {#each block.siblings as sibling}
      <li class="notion__bulleted-list-item">
        <NotionBlockRichText block={sibling.bulleted_list_item.text} />
      </li>
    {/each}
  {/if}
</ul>

<style lang="scss">
  .notion__bulleted-list {
    list-style-type: disc;
  }
</style>
