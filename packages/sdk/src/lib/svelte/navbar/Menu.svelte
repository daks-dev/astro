<script lang="ts">
  import Link from '../nav/Link.svelte';
  import twMerge from '../../tailwind';

  let className: ClassName = undefined;
  export { className as class };
  export let custom: ClassMap = {};

  export let links: Record<string, string>; // NavItem[]
  export let hidden: boolean;
  export let duration: number;

  let innerWidth: number;
  $: hide = (hidden && innerWidth < 1024) || undefined;
</script>

<svelte:window bind:innerWidth />

<nav
  id="navbar-menu"
  class={twMerge(
    'absolute left-0 top-full z-0 lg:static',
    // 'grid grid-cols-1 lg:auto-cols-max lg:grid-flow-col lg:gap-x-3 2xl:gap-x-5',
    'flex flex-col lg:flex-row lg:flex-nowrap lg:gap-x-3 2xl:gap-x-5',
    'ml-1 mt-1 max-w-xs sm:max-w-md lg:m-0 lg:max-w-none',
    hidden && '-lg:disabled -lg:scale-75 -lg:opacity-0',
    duration && 'origin-top-left transition ease-in-out lg:origin-center',
    // 'first:rounded-t-md last:rounded-b-md',
    custom.menu,
    className
  )}
  style:transition-duration={duration ? `${duration}ms` : undefined}
  aria-owns="navbar-toggle"
  aria-hidden={hide}>
  {#each Object.entries(links) as [href, label]}
    <Link
      rel="prefetch"
      class={twMerge('flex items-center', custom.link)}
      {href}
      tabindex={hide && '-1'}>
      {label}
    </Link>
  {/each}
  <slot />
</nav>
