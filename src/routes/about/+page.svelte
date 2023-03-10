<script lang="ts">
  import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About czenhe.me" />
</svelte:head>

<section class="section-column">
  <h1>About Czenhe.me</h1>

  <div class="block">
    <p>{@html $t('about.text1')}</p>
    <p>{@html $t('about.text2')}</p>
    <p>{@html $t('about.text3')}</p>
  </div>
</section>

<style lang="scss">
  .block {
    width: calc(100% - 2em);
    max-width: 740px;
    margin: 0 auto;
    padding: 1em 2em;
    border-radius: 12px;
    background-color: white;
    box-sizing: border-box;
  }
</style>
