<script lang="ts">
  import { onMount } from 'svelte';
  import Menu from './Menu.svelte';
  import Toggle from './Toggle.svelte';
  import Wrapper from './Wrapper.svelte';
  import twMerge from '../../tailwind/tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };
  export let custom: {
    [x in 'menu' | 'link' | 'toggle']?: ClassName;
  } = {};

  export let links: Record<string, string>; // NavItem[]

  let durationSet: number | string = 300;
  export { durationSet as duration };
  let duration = 0;

  let hidden = true;
  const close = () => (hidden = true);
  const toggle = () => (hidden = !hidden);

  function handleKey(ev: KeyboardEvent): void {
    if (ev.key === 'Escape' && !hidden) {
      ev.preventDefault();
      ev.stopPropagation();
      close();
    }
  }

  onMount(() => (duration = Number(durationSet)));
</script>

<svelte:body on:keydown={handleKey} />

<Wrapper
  let:scrolled
  class={className}
  {close}
  {duration}
  {...$$restProps}>
  <slot
    name="before"
    {scrolled}
    {close}
    {custom} />

  <Menu
    {links}
    {hidden}
    {duration}
    {custom}>
    <slot
      {scrolled}
      {close}
      {custom} />
  </Menu>

  <slot
    name="after"
    {scrolled}
    {close}
    {custom} />

  <Toggle
    class={twMerge('order-last ml-4 lg:hidden', custom.toggle)}
    {hidden}
    {toggle} />
</Wrapper>
