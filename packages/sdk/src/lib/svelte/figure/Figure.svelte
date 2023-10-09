<script lang="ts">
  import twMerge from '../../tailwind/tailwind-merge';
  import placeholder from '../../assets/images/placeholder';

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Record<string, ClassName> = {};

  export let style = '';
  export let width: number | string = 0;
  export let height: number | string = 0;

  export let image: ImageResult = {} as ImageResult;
  export let src = image.src;
  export let alt = '';

  export let attributes: Metadata = image.attributes;
  attributes.loading ??= 'lazy';
  attributes.decoding ??= 'async';

  export let title = '';
  export let subtitle = '';
  export let description = '';

  export let native = false;

  export let loaded: ((x?: Event | HTMLElement) => void) | undefined = undefined;

  const handleLoad = native && loaded ? (ev: Event) => loaded?.call(ev) : undefined;
</script>

<figure
  class={twMerge('flex flex-col', className)}
  {style}
  style:width={width ? `${width}px` : undefined}
  style:height={height ? `${height}px` : undefined}
  {...$$restProps}>
  <img
    on:load={handleLoad}
    class={twMerge(!native && 'lazy bg-neutral-300', custom?.image)}
    src={native ? src : placeholder}
    data-src={native ? undefined : src}
    alt={(alt ?? title ?? '').toLowerCase()}
    {...attributes} />
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
