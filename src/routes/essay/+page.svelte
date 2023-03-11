<script lang="ts">
  import PostPreview from '$components/blog/PostPreview.svelte';
  import type { PostPreviewProps } from '$components/blog/PostPreview.svelte';
  import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte';

  type NotionItem = {
    id: string;
    properties: PostPreviewProps;
    created_time: string;
    last_edited_time: string;
  };

  let result: Array<NotionItem>;

  export let data;

  beforeUpdate(() => {
    console.log('beforeUpdate execute');
  });
  onMount(async () => {
    console.log('onMount execute');
  });
  afterUpdate(() => {
    console.log('afterUpdate execute');
  });
  onDestroy(() => {
    console.log('onDestroy execute');
  });
  console.log('script execute');

  console.log('page data', data.body.result);
  result = data.body.result;
</script>

<svelte:head>
  <title>Essay</title>
  <meta name="description" content="Essay" />
</svelte:head>

<section class="section-column">
  <h1>Essay</h1>

  <section class="">
    {#if result}
      {#each result as notionItem}
        <PostPreview id={notionItem.id} props={notionItem.properties} />
      {/each}
    {/if}
  </section>
</section>
