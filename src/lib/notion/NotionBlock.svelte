<script context="module" lang="ts">
  import type { Block } from './notion.types';
  import type { BlockNumberedListItem } from './NotionBlockNumberedList.svelte';
  import type { BlockBulletedListItem } from './NotionBlockBulletedList.svelte';
  import type { BlockToggleListItem } from './NotionBlockToggleList.svelte';
</script>

<script lang="ts">
  import NotionBlockTitle from './NotionBlockTitle.svelte';
  import NotionBlockHeading from './NotionBlockHeading.svelte';
  import NotionBlockRichText from './NotionBlockRichText.svelte';
  import NotionBlockTagList from './NotionBlockTagList.svelte';
  import NotionBlockPeople from './NotionBlockPeople.svelte';
  import NotionBlockParagraph from './NotionBlockParagraph.svelte';
  import NotionBlockNumberedList from './NotionBlockNumberedList.svelte';
  import NotionBlockBulletedList from './NotionBlockBulletedList.svelte';
  import NotionBlockToggleList from './NotionBlockToggleList.svelte';

  export let block: Block & BlockNumberedListItem & BlockBulletedListItem & BlockToggleListItem;
</script>

{#if block.type == 'title'}
  <NotionBlockTitle block={block[block.type]} />
{:else if block.type == 'heading_1' || block.type == 'heading_2' || block.type == 'heading_3'}
  <NotionBlockHeading block={block[block.type]} type={block.type} />
{:else if block.type == 'multi_select'}
  <NotionBlockTagList block={block[block.type]} />
{:else if block.type == 'rich_text'}
  <NotionBlockRichText block={block[block.type]} />
{:else if block.type == 'paragraph'}
  <NotionBlockParagraph block={block[block.type]} />
{:else if block.type == 'people'}
  <NotionBlockPeople block={block[block.type]} />
{:else if block.type == 'numbered_list_item'}
  <NotionBlockNumberedList {block} />
{:else if block.type == 'bulleted_list_item'}
  <NotionBlockBulletedList {block} />
{:else if block.type == 'toggle'}
  <NotionBlockToggleList {block} />
{:else}
  <!-- <ul>
    <li>object: {block.object}</li>
    <li>id: {block.id}</li>
    <li>parent: {JSON.stringify(block.parent)}</li>
    <li>created_time: {block.created_time}</li>
    <li>last_edited_time: {block.last_edited_time}</li>
    <li>created_by: {JSON.stringify(block.created_by)}</li>
    <li>last_edited_by: {JSON.stringify(block.last_edited_by)}</li>
    <li>has_children: {block.has_children}</li>
    <li>archived: {block.archived}</li>
    <li>type: {block.type}</li>
    <li>{JSON.stringify(block[block.type])}</li>
  </ul> -->
{/if}
