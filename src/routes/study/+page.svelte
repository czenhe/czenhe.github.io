<script lang="ts">
  import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
  <title>Study Room</title>
  <meta name="description" content="Study Room" />
</svelte:head>

<section class="section-column">
  <h1 class="pageTitle">Study Room</h1>

  <div class="block">
    <p>{@html $t('common.comingsoon')}</p>

    <ul>
      <li>WebGL과 그래픽프로그래밍</li>
      <li>Web기술에 대해</li>
      <li>정보처리시험</li>
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
    text-align: center;
    ul {
      text-align: left;
    }
  }
</style>
