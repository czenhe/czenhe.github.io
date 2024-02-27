<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let sessionNum = 0;
  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  let intersecting = false;
  let container: Element;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const onScreen = (entries: any) => {
        intersecting = entries[0].isIntersecting;
        if (intersecting) {
          dispatch('moveToSection', { targetId: sessionNum });
          if (once) {
            observer.unobserve(container);
          }
        }
      };
      const options = {
        threshold: 0.5,
        rootMargin: `${bottom}px ${left}px ${top}px ${right}px`
      };

      const observer = new IntersectionObserver(onScreen, options);

      observer.observe(container);
      console.log('監視を開始', sessionNum);

      // unmounted
      return () => {
        observer.unobserve(container);
        console.log('監視終了', sessionNum);
      };
    }

    function handler() {
      const bcr = container.getBoundingClientRect();
      intersecting =
        bcr.bottom + bottom > 0 &&
        bcr.right + right > 0 &&
        bcr.top - top < window.innerHeight &&
        bcr.left - left < window.innerWidth;

      if (intersecting && once) {
        window.removeEventListener('scroll', handler);
      }
    }

    window.addEventListener('scroll', handler);

    // unmounted
    return () => {
      console.log('unmounted');
      window.removeEventListener('scroll', handler);
    };
  });
</script>

<div bind:this={container}>
  <slot {intersecting} />
</div>

<style lang="scss">
  div {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
  }
</style>
