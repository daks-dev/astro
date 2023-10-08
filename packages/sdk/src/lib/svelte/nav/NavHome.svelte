<script lang="ts">
  import { page } from '../../app/stores';
  import twMerge from '../../tailwind/tailwind-merge';
  import Link from './Link.svelte';

  let className: ClassName = undefined;
  export { className as class };

  export let brand: string | undefined = 'home page';
</script>

<Link
  class={twMerge(className)}
  href="/"
  label={brand}>
  <slot>
    {#if $page.url.pathname === '/'}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" />
      </svg>
    {:else}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    {/if}
  </slot>
</Link>
