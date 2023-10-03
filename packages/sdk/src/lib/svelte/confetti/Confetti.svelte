<script lang="ts">
  import { onMount } from 'svelte';
  import { confetti } from '@neoconfetti/svelte';

  export let delay = 750;
  export let count = 256;
  export let size = 10;
  export let width = 0.8;
  export let height = 0.75;
  export let duration = 3500;
  export let force = 0.3;
  export let destroy = true;

  let innerWidth: number;
  let innerHeight: number;
  let render = false;

  onMount(() => {
    console.log(innerHeight);
    setTimeout(() => (render = true), delay);
  });
</script>

<svelte:window
  bind:innerWidth
  bind:innerHeight />

{#if render}
  <div
    use:confetti={{
      particleCount: count,
      particleSize: size,
      stageWidth: innerWidth * width,
      stageHeight: innerHeight * height,
      destroyAfterDone: destroy,
      duration,
      force
    }}
    class=" left-[50vw] top-[25vh] z-0"
    style:position="absolute" />
{/if}
