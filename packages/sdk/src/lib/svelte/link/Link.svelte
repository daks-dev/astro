<script lang="ts">
  import { page } from '../../app/stores';
  import twMerge from '../../tailwind/tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let href: string;
  export let label: Attribute = undefined;

  export let target: Attribute = undefined;
  export let tabindex: number | null | undefined = undefined;
  export let title: Attribute = undefined;
  export let rel: Attribute = undefined;
  export let role: Attribute = undefined;
  export let itemprop: Attribute = undefined;

  export let handle: ((x?: Event) => unknown) | undefined = undefined;

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
  {target}
  {tabindex}
  {title}
  {rel}
  {role}
  {itemprop}
  aria-label={label}
  aria-current={current}>
  <slot name="before" />
  <slot>
    {@html label}
  </slot>
  <slot name="after" />
</a>
