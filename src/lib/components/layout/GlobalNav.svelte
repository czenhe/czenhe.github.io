<script lang="ts">
  import { page } from '$app/stores';
  export let isVisible: boolean;
</script>

<nav class="navigation js-menu {isVisible ? 'is-visible' : ''}">
  <ul class="navigation-items">
    <li class="navigation-item" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
      <a href="/about">About</a>
    </li>
    <li class="navigation-item" aria-current={$page.url.pathname === '/essay' ? 'page' : undefined}>
      <a href="/essay">Essay</a>
    </li>
    <li class="navigation-item">
      <a href="https://devlog.czenhe.me/" target="_blank" rel="noreferrer">Study</a>
    </li>
    <li class="navigation-item">
      <a href="https://theafterhours.page/" target="_blank" rel="noreferrer">Project</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  ul {
    list-style-type: none;
  }

  .navigation {
    position: fixed;
    z-index: -10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 128px 20px 20px;
    background: var(--color-bg-1);
    transition: all 500ms 0s ease-in-out;
    opacity: 0;
    &-items {
      display: block;
      padding-right: 0;
      padding-left: 0;
      border: none;
      border-radius: 0;
    }
    &-item {
      margin-top: 16px;
      margin-right: 0;
      margin-left: 0;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 2em;
      background-position: center left;
      color: var(--color-theme-3);
      a {
        display: block;
        height: 100%;
        color: var(--color-theme-3);
        font-size: 32px;
        line-height: 40px;
      }
    }
    &.is-visible {
      display: flex;
      z-index: 100;
      flex-direction: column;
      justify-content: space-between;
      opacity: 1;
    }
  }
</style>
