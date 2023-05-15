<script>
  import { onMount } from 'svelte';
</script>

<svelte:head>
  <title>Czenhe + me</title>
  <meta name="description" content="Czenhe's portfolio site" />
</svelte:head>
<div class="contents" id="fullpage">
  <div class="section section01">
    <div id="intro" />
    <div class="fullBackground" />
    <div class="scroll-btn">
      <a class="flex column" href="#news" data-menuanchor="news">
        <span>SCROLL</span>
        <span class="material-symbols-outlined"> keyboard_double_arrow_down </span>
      </a>
    </div>
  </div>
  <div class="section section02">section2</div>
</div>

<style lang="scss">
  .material-symbols-outlined {
    font-size: 1rem;
  }
  .contents {
    position: relative;
    top: 0px;
    height: 100%;
    touch-action: none;
  }
  .section {
    position: relative;
  }
</style>
