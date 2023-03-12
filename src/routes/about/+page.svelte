<script lang="ts">
  import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About czenhe.me" />
</svelte:head>

<section class="section-column">
  <h1 class="pageTitle">Czenhe + me</h1>

  <div class="block">
    <ul>
      <li>・Czenhe</li>
      <li>・Front-end Engineer / UI/UX based in Tokyo</li>
      <li />
    </ul>
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
  }
  ul > li {
    line-height: 2rem;
  }
</style>
