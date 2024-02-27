<script context="module" lang="ts">
  import type { BlockTitle } from './notion.types';
</script>

<script lang="ts">
  export let block: Array<BlockTitle>;
</script>

<h3 class="notion__block-type notion__title">
  {#each block as blockItem}
    {blockItem.text.content}
  {/each}
</h3>

<style lang="scss">
  h3.notion__title {
    font-weight: 400;
    margin: 0;
  }
</style>
