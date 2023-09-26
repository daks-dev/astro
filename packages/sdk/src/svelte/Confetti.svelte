<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import confetti from 'canvas-confetti';

  export let count = 320;
  export let velocity = 32;
  export let spread = 0;
  export let random = false;
  export let origin = random
    ? {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    : undefined;

  if (BROWSER)
    onMount(() =>
      setTimeout(
        () =>
          confetti({
            particleCount: count,
            startVelocity: velocity,
            spread: spread || Math.min(window.innerWidth, window.innerHeight),
            origin
          }),
        500
      )
    );
</script>
