<script lang="ts">
  import twMerge from '../../../tailwind';
  import type { Custom, Status } from '..';

  export let title: string;
  export let subtitle: string;
  export let description: string;

  export let custom: Partial<Custom>;
  export let fullscreen: boolean;

  export let status: Status = undefined;
</script>

<div
  class={twMerge('lightbox-footer', 'relative z-30', custom.footer)}
  class:fullscreen>
  <div
    class="
    grid min-h-[3rem]
    cursor-default grid-cols-2 items-center gap-1
    p-2 leading-none text-white/50 hover:text-white">
    {#if title}
      <div class="font-semibold">
        {@html title}
      </div>
    {/if}
    {#if status}
      <div
        class="whitespace-nowrap font-mono"
        class:text-right={title}>
        {status.activeItem + 1} <sup>[{status.countItems}]</sup>
      </div>
    {/if}
    {#if subtitle}
      <span class="col-span-2">
        {@html subtitle}
      </span>
    {/if}
    {#if description}
      <small class="col-span-2">
        {@html description}
      </small>
    {/if}
  </div>
</div>
