<script>
  import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte';

  onMount(() => {
    console.log('onMount');
  });
  beforeUpdate(() => {
    console.log('beforeUpdate');
  });
  afterUpdate(() => {
    console.log('afterUpdate');
  });
  onDestroy(() => {
    console.log('onDestroy');
  });
  console.log('script');
</script>

<svelte:head>
  <title>Czenhe + me</title>
  <meta name="description" content="Czenhe's portfolio site" />
</svelte:head>
<div class="contents" />

<style lang="scss">
  .contents {
    display: flex;
    position: relative;
    top: 0px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    touch-action: none;
  }
</style>
