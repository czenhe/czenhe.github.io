<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  let isOpen = false;
  let isVisible = false;
  const switchOpen = () => {
    isOpen = !isOpen;
    isVisible = !isVisible;
  };
  const clear = () => {
    isOpen = false;
    isVisible = false;
  };
  afterNavigate(() => {
    clear();
  });
</script>

<nav class="menu-button {isOpen ? 'is-open' : ''}" on:click={switchOpen} aria-hidden="true" />
<nav class="navigation js-menu {isVisible ? 'is-visible' : ''}">
  <ul class="navigation-items">
    <li class="navigation-item" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
      <a href="/about">About</a>
    </li>
    <li class="navigation-item" aria-current={$page.url.pathname === '/essay' ? 'page' : undefined}>
      <a href="/essay">Essay</a>
    </li>
    <li class="navigation-item" aria-current={$page.url.pathname === '/study' ? 'page' : undefined}>
      <a href="/study">Study</a>
    </li>
    <li
      class="navigation-item"
      aria-current={$page.url.pathname === '/project' ? 'page' : undefined}
    >
      <a href="/project">Project</a>
    </li>
  </ul>
  <!-- <ul class="sub-navigation-items">
    <li class="sub-navigation-item">
      <a href="/" target="_blank" rel="noopener noreferrer">Youtube</a>
    </li>
    <li class="sub-navigation-item">
      <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </li>
  </ul>
  <a class="twitter-navigation" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> -->
</nav>

<style lang="scss">
  ul {
    list-style-type: none;
  }

  .menu-button {
    display: none;
    position: absolute;
    z-index: 1000;
    top: 30px;
    right: 0;
    width: 48px;
    height: 48px;
    border-top: 1px solid var(--color-theme-1);
    border-bottom: 1px solid var(--color-theme-1);
    border-left: 1px solid var(--color-theme-1);
    border-radius: 24px 0 0 24px;
    background-color: var(--color-theme-1);
    transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 20px;
      width: 16px;
      height: 1px;
      background-color: var(--color-theme-3);
      transition: 0.2s ease-in-out;
    }
    &:before {
      top: 18px;
    }
    &:after {
      top: 28px;
    }
    &.is-open {
      background-color: var(--color-theme-1);
      &:before,
      &:after {
        top: 22px;
        right: 12px;
        width: 18px;
        background-color: var(--color-theme-3);
      }
      &:before {
        transform: rotate(40deg);
      }
      &:after {
        transform: rotate(-40deg);
      }
    }
  }
  .navigation {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 8px 12px;
    &-items {
      display: flex;
      padding: 0 30px;
      border: 1px solid var(--color-theme-1);
      border-radius: 22px;
      background-color: var(--color-theme-1);
    }
    &-item {
      margin: 0 10px;
      padding: 8px 0 6px;
      color: var(--color-theme-3);
      font-family: var(--font-nanum);
      a {
        color: var(--color-theme-3);
        font-size: 24px;
      }
    }
  }

  /* .sub-navigation-items {
        display: none;
        margin-top: 40px;
      }
      .twitter-navigation {
        display: none;
        position: relative;
        margin-top: auto;
        padding-left: 28px;
        font-size: 12px;
        line-height: 24px;
        color: #fff;
      } */
  @media screen and (max-width: 1000px) {
    .menu-button {
      display: block;
    }
    .navigation {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 128px 20px 20px;
      &-items {
        display: block;
        padding-right: 0;
        padding-left: 0;
        border: none;
        border-radius: 0;
        background-color: var(--color-theme-1);
      }
      &-item {
        margin-top: 16px;
        margin-right: 0;
        margin-left: 0;
        padding-top: 0;
        padding-bottom: 0;
        background-position: center left;
        & > a {
          display: block;
          height: 100%;
          font-size: 32px;
          line-height: 40px;
        }
      }
      &.is-visible {
        display: flex;
        background-color: var(--color-theme-1);
        flex-direction: column;
        justify-content: space-between;
      }
    }
    /* .sub-navigation-items {
            display: block;
        }
        .twitter-navigation {
          display: block;
        } */
  }
</style>
