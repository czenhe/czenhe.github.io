<script lang="ts">
  import logo from '$images/lion.png';
</script>

<section>
  <div class="block">
    <figure><img src={logo} alt="lion" width="400" /></figure>
    <ul>
      <li>Czenhe</li>
      <li>Front-end Engineer / UI/UX based in Tokyo</li>
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
    display: flex;

    ul > li {
      line-height: 2rem;
    }
  }
</style>
