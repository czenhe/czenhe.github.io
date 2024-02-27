<script lang="ts">
  import PostPreview from '$components/blog/PostPreview.svelte';
  import type { PostPreviewProps } from '$components/blog/PostPreview.svelte';

  type NotionItem = {
    id: string;
    properties: PostPreviewProps;
    created_time: string;
    last_edited_time: string;
  };

  let result: Array<NotionItem>;

  export let data;

  result = data.result;
</script>

<svelte:head>
  <title>Essay</title>
  <meta name="description" content="Essay" />
</svelte:head>

<section class="section-column">
  <h1 class="pageTitle">Essay</h1>

  <div class="block">
    {#if result}
      {#each result as notionItem}
        <!-- {JSON.stringify(notionItem)} -->
        <PostPreview id={notionItem.id} props={notionItem.properties} />
      {/each}
    {/if}
  </div>
</section>

<style lang="scss">
  .block {
    width: 100%;
    max-width: 740px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
