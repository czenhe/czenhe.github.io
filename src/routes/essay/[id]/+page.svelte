<script lang="ts" context="module">
  import type { Block } from '$lib/notion';

  export async function load({ page: { params } }) {
    const { id } = params;
    const res = await fetch(`/blog/${id}.json`);
    if (res.ok) {
      return {
        props: {
          result: await res.json()
        }
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not pull the block`)
    };
  }
</script>

<script lang="ts">
  import Post from '$components/blog/Post.svelte';

  export let result: {
    result: Array<Block>;
  };
</script>

<section>
  {#if result}
    <Post props={result.result} />
  {/if}
</section>

<style style lang="postcss">
</style>
