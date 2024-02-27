<script context="module" lang="ts">
  export type PostPreviewProps = {
    title: any;
    summary: any;
    tags: any;
    published: any;
    author: any;
  };
</script>

<script lang="ts">
  import NotionBlock from '$lib/notion/NotionBlock.svelte';
  export let props: PostPreviewProps;
  export let id: string;
</script>

<div class="post-preview">
  <a href={`/essay/${id}`}>
    <NotionBlock block={props.title} />
  </a>
</div>

<style lang="scss">
  .post-preview {
    padding: 1em 0;
    border-bottom: 1px solid var(--color-theme-1);
  }
  a:hover {
    text-decoration: none;
  }
</style>
