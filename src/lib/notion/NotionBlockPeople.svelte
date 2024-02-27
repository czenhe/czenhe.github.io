<script context="module" lang="ts">
  import type { BlockPeople } from './notion.types';
</script>

<script lang="ts">
  export let block: Array<BlockPeople>;
</script>

<h3 class="notion__block-type notion__people">
  {#each block as blockItem}
    <img src={blockItem.avatar_url} alt={`${blockItem.name}'s avatar`} />
    <div class="author__meta">
      <!-- {blockItem.name} -->
    </div>
  {/each}
</h3>

<style lang="scss">
  .notion__people {
    display: flex;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  }
  img {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
    border-radius: 0.375rem; /* 6px */
    box-shadow: inset 0 0 0 2px rgb(209 213 219);
  }
</style>
