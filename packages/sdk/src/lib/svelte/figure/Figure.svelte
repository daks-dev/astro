<script lang="ts">
  import { getImage } from 'astro:assets';
  import twMerge from '../../tailwind/tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };
  export let custom: Record<string, ClassName> = {};

  export let style: string | undefined = undefined;

  let meta: ImageMetadata;
  export { meta as src };

  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let alt: string | undefined = undefined;

  export let title: string | undefined = undefined;
  export let subtitle: string | undefined = undefined;
  export let description: string | undefined = undefined;

  export let native: true | undefined = undefined;
  export let loaded: ((x?: Event | HTMLElement) => void) | undefined = undefined;
  const handleLoad = native && loaded ? (ev: Event) => loaded?.call(ev) : undefined;

  const promise = getImage({ src: meta, width, height, quality: 80 });
</script>

<figure
  class={twMerge('flex flex-col', className)}
  {style}>
  {#await promise}
    <div
      class="bg-neutral-300/25"
      style:width={`${width}px`}
      style:height={`${height}px`}>
      <link
        role="img"
        href={meta.src} />
    </div>
  {:then { src, attributes }}
    <img
      on:load={handleLoad}
      class={twMerge(native && 'bg-neutral-300', custom?.image)}
      {src}
      {...attributes}
      alt={(alt ?? title ?? '').toLowerCase()} />
  {/await}
  {#if title || subtitle || description}
    <figcaption class={twMerge('flex flex-col', custom?.caption)}>
      {#if title}
        <span class="font-semibold">{@html title}</span>
      {/if}
      {#if subtitle}
        <span>{@html subtitle}</span>
      {/if}
      {#if description}
        <small>{@html description}</small>
      {/if}
    </figcaption>
  {/if}
</figure>
