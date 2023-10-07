<script lang="ts">
  import outside from '../../utils/outside';
  import { meta } from '../../app/stores';
  import twMerge from '../../tailwind';

  let className: ClassName = undefined;
  export { className as class };

  export let close: () => void;
  export let duration: number;

  let scrollY: number;
  let navbar: HTMLElement;

  $: scrolled = scrollY > navbar?.clientHeight;
  $: meta.setKey('scrolled', scrolled);
</script>

<svelte:window bind:scrollY />

<div
  bind:this={navbar}
  id="navbar"
  class={twMerge(
    'fixed left-0 top-0 z-10 w-full',
    'vector-non-scaling-stroke text-lg',
    duration && 'origin-top transition-colors ease-in-out',
    className
  )}
  class:scrolled
  style:transition-duration={duration ? `${duration}ms` : undefined}
  {...$$restProps}>
  <div
    use:outside={close}
    class="wrapper flex flex-wrap items-center justify-end">
    <slot {scrolled} />
  </div>
</div>
