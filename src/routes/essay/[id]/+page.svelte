<script lang="ts">
  import type { Block } from '$notion';
  import Post from '$components/blog/Post.svelte';

  export let data;
  export let result: Array<Block> = data.result;
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
    @apply mb-6;
  }
  article {
    width: 100%;
    max-width: 740px;
    margin: 0 auto;
    padding: 1em 2em;
    box-sizing: border-box;
  }
</style>
