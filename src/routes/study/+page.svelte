<script lang="ts">
  import { t } from '$lib/locales/i18n';
</script>

<svelte:head>
  <title>Study Room</title>
  <meta name="description" content="Study Room" />
</svelte:head>

<section class="section-column">
  <h1>Study Room</h1>

  <p>{@html $t('common.comingsoon')}</p>
  <ul>
    <li>WebGL과 그래픽프로그래밍</li>
    <li>Web기술에 대해</li>
    <li>정보처리시험</li>
  </ul>
</section>
