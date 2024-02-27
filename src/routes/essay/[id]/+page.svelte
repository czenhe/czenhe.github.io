<script lang="ts">
  import Post from '$components/blog/Post.svelte';
  import type {
    Block,
    BlockNumberedListItem,
    BlockBulletedListItem,
    BlockToggleListItem
  } from '$notion';

  export let data;
  export let result: Array<
    Block & BlockNumberedListItem & BlockBulletedListItem & BlockToggleListItem
  > = data.result;
</script>

<section>
  <h2 class="postTitle">{data.title}</h2>
  <article>
    {#if result}
      <Post props={result} />
    {/if}
  </article>
</section>

<style lang="scss">
  h2.postTitle {
    margin-bottom: 1.5rem; /* 24px */
  }
  article {
    width: 100%;
    max-width: 740px;
    margin: 0 auto;
    padding: 1em 2em;
    box-sizing: border-box;
  }
</style>
