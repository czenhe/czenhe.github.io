<script context="module" lang="ts">
  import type { BlockTag } from './notion.types';
</script>

<script lang="ts">
  export let block: Array<BlockTag>;
</script>

<ul class="notion__block-type notion__tag-list">
  {#each block as blockItem}
    <li data-id={blockItem.id} class="notion__tag {blockItem.color}_background">
      {blockItem.name}
    </li>
  {/each}
</ul>

<style lang="scss">
  .notion__tag-list {
    list-style-type: none;
    display: flex;
    gap: 0.25rem; /* 4px */
  }
  .notion__tag {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    background-color: rgb(249 250 251);
    padding-left: 0.5rem; /* 8px */
    padding-right: 0.5rem; /* 8px */
    padding-top: 0.25rem; /* 4px */
    padding-bottom: 0.25rem; /* 4px */
    border-radius: 0.125rem; /* 2px */
  }
</style>
