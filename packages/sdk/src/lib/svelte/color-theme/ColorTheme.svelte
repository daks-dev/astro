<script lang="ts">
  // import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '../../tailwind/tailwind-merge';
  import { settings } from '../../app/stores/persistent';

  let className: ClassName = undefined;
  export { className as class };

  export let size: number | string = '24';

  let dark: boolean;

  function toggle() {
    dark = document.documentElement.classList.toggle('dark');
    settings.setKey('theme', dark ? 'dark' : 'light');
  }
  /*
  if (BROWSER)
    (() => {
      function set() {
        if (
          $settings.theme === 'dark' ||
          ($settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        )
          document.documentElement.classList.add('dark');
        else if ($settings.theme === 'light') document.documentElement.classList.remove('dark');
      }
      set();
      document.addEventListener('astro:after-swap', set);
    })();
  */
  onMount(() => (dark = document.documentElement.classList.contains('dark')));
</script>

<button
  on:click={toggle}
  class={twMerge(className)}
  type="button"
  {...$$restProps}>
  {#if dark}
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <g fill="currentColor">
        <circle
          cx="12"
          cy="12"
          r="3"
          opacity=".3" />
        <path
          d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
      </g>
    </svg>
  {:else}
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <g fill="currentColor">
        <path
          d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49z"
          opacity=".3" />
        <path
          d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
      </g>
    </svg>
  {/if}
</button>
