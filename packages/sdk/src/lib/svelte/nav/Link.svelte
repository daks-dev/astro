<script lang="ts">
  import { page } from '../../app/stores';
  import twMerge from '../../tailwind';

  let className: ClassName = undefined;
  export { className as class };

  export let href: string;
  export let label: string | undefined = undefined;
  export let handle: ((x?: Event) => unknown) | undefined = undefined;
  export let size: number | string | undefined = undefined;

  $: current = (
    $page.url.pathname === href || $page.url.pathname === `${href}/`
      ? 'page'
      : $page.url.pathname?.indexOf(`${href}/`) >= 0
      ? 'step'
      : undefined
  ) as 'page' | 'step' | undefined;
</script>

<a
  on:click={handle}
  on:dblclick={handle}
  on:keydown
  class={twMerge('page:disabled', className)}
  {href}
  aria-label={label}
  aria-current={current}
  {...$$restProps}>
  <slot
    name="before"
    {current} />
  <slot
    {current}
    {size}>
    {@html label}
  </slot>
  <slot
    name="after"
    {current} />
</a>
