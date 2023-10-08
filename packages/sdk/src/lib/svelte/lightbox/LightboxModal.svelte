<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  type Meta = string | null | undefined;

  export let title: Meta = undefined;
  export let subtitle: Meta = undefined;
  export let description: Meta = undefined;

  const activeItemStore: Writable<number> = getContext('activeItem');

  const id = getContext<(x: Record<string, Meta>) => number>('counterItems')({
    title,
    subtitle,
    description
  });
</script>

{#if $activeItemStore === id}
  <slot {...$$restProps} />
{/if}
