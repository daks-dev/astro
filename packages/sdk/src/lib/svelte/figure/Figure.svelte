<script lang="ts">
  import twMerge from '../../tailwind/tailwind-merge';
  import placeholder from '../../assets/images/placeholder';

  let className: ClassName = undefined;
  export { className as class };
  export let style: string | undefined = undefined;

  export let custom: Record<string, ClassName> = {};

  export let image: ImageResult = {} as ImageResult;
  export let src: Attribute = image.src;
  export let attributes: Metadata = image.attributes;

  export let width: Meta = undefined;
  if (typeof width !== 'undefined') attributes.width = width;
  export let height: Meta = undefined;
  if (typeof height !== 'undefined') attributes.height = height;

  export let alt: Attribute = undefined;

  attributes.loading ??= 'lazy';
  attributes.decoding ??= 'async';

  export let title: string | undefined = undefined;
  export let subtitle: string | undefined = undefined;
  export let description: string | undefined = undefined;

  export let native: true | undefined = undefined;

  export let loaded: ((x?: Event | HTMLElement) => void) | undefined = undefined;

  const handleLoad = native && loaded ? (ev: Event) => loaded?.call(ev) : undefined;
</script>

<figure
  class={twMerge('flex flex-col', className)}
  {style}>
  <img
    on:load={handleLoad}
    class={twMerge(!native && 'lazy bg-neutral-300', custom?.image)}
    src={native ? src : placeholder}
    data-src={native ? undefined : src}
    {...attributes}
    alt={(alt ?? title ?? '').toLowerCase()}
    {...$$restProps} />
  {#if title || subtitle || description}
    <figcaption class={twMerge('flex flex-col', custom?.caption)}>
      {#if title}
        <span class={twMerge('font-semibold', custom?.title)}>{@html title}</span>
      {/if}
      {#if subtitle}
        <span class={twMerge(custom?.subtitle)}>{@html subtitle}</span>
      {/if}
      {#if description}
        <small class={twMerge(custom?.description)}>{@html description}</small>
      {/if}
    </figcaption>
  {/if}
</figure>
