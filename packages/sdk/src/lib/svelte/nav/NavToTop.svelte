<script lang="ts">
  import { fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { toTop } from '../../utils/scroll';
  import { meta } from '../../app/stores';
  import twMerge from '../../tailwind';

  let className: ClassName = undefined;
  export { className as class };

  export let duration = 300;
  export let speed = duration * 5;

  function handleClck() {
    toTop({ duration: speed });
  }
</script>

{#if $meta.scrolled}
  <button
    in:fade={{
      duration: duration * 1.5,
      easing: sineIn
    }}
    out:fade={{
      duration: duration * 0.75,
      easing: sineOut
    }}
    on:click|preventDefault={handleClck}
    class={twMerge(
      'absolute top-full z-10 flex',
      'opacity-50 hover:opacity-100',
      'transition ease-in-out ',
      className
    )}
    style:transition-duration={duration ? `${duration}ms` : undefined}>
    <slot>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8 21v-2h8v2H8m0-4v-2h8v2H8m0-4v-2h8v2H8m11-4H5l7-7l7 7Z" />
      </svg>
    </slot>
  </button>
{/if}
