<script>
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import '$styles/styles.css';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style lang="scss">
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    display: flex;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
  }
</style>
