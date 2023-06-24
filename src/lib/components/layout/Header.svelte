<script lang="ts">
  import GlobalNav from './GlobalNav.svelte';
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

<header>
  <nav class="menu">
    <nav class="menu-button {isOpen ? 'is-open' : ''}" on:click={switchOpen} aria-hidden="true" />
    <div class="logo">
      <a href="/" class={isOpen ? 'is-open' : ''}>
        <span>czenhe + me</span>
      </a>
    </div>
  </nav>

  <GlobalNav {isVisible} />
</header>

<style lang="scss">
  header {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .menu {
    display: flex;
    position: fixed;
    z-index: 101;
    top: 1.45rem;
    left: 1.25rem;
    align-items: center;

    gap: 20px;
  }

  .logo {
    font-family: var(--font-homemade-apple);
    font-size: 1.2rem;
    a {
      display: flex;
      color: var(--color-theme-1);
      align-items: center;

      gap: 20px;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .menu-button {
    width: 48px;
    height: 48px;
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
      background-color: var(--color-theme-1);
      transition: 0.2s ease-in-out;
    }
    &:before {
      top: 18px;
    }
    &:after {
      top: 28px;
    }
    &.is-open {
      &:before,
      &:after {
        top: 22px;
        right: 12px;
        width: 18px;
      }
      &:before {
        transform: rotate(40deg);
      }
      &:after {
        transform: rotate(-40deg);
      }
    }
  }
</style>
