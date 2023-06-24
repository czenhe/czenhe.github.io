<script>
  import { onMount } from 'svelte';
  import logo from '$lib/images/lion.png';
</script>

<svelte:head>
  <title>Czenhe + me</title>
  <meta name="description" content="Czenhe's portfolio site" />
</svelte:head>
<div class="contents">
  <!-- <img src={logo} alt="lion" width="400" /> -->
</div>

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
