<script lang="ts" context="module">
  import type { Block } from '$lib/notion';
  type Props = {
    params: any;
  };

  export async function load(props: Props) {
    const { id } = props.params;
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
  <Post props={result.result} />
</section>

<style style lang="postcss">
</style>
