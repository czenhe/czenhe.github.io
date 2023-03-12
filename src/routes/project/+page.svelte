<script lang="ts">
  import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
  <title>Project Room</title>
  <meta name="description" content="Project Room" />
</svelte:head>

<section class="section-column">
  <h1 class="pageTitle">Project Room</h1>

  <div class="block">
    <p>{@html $t('common.comingsoon')}</p>
  </div>
</section>

<style lang="scss">
  .block {
    width: 100%;
    max-width: 740px;
    margin: 0 auto;
    padding: 1em 2em;
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
  }
</style>
