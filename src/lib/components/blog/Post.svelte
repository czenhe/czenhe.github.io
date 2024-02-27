<script context="module" lang="ts">
  import type {
    Block,
    BlockNumberedListItem,
    BlockBulletedListItem,
    BlockToggleListItem
  } from '$notion';
</script>

<script lang="ts">
  import NotionBlock from '$notion/NotionBlock.svelte';
  export let props: Array<
    Block & BlockNumberedListItem & BlockBulletedListItem & BlockToggleListItem
  >;
</script>

<div class="post">
  <!-- {JSON.stringify(props)} -->
  {#each props as prop}
    <NotionBlock block={prop} />
  {/each}
</div>

<style lang="scss">
</style>
