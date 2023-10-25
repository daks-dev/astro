export declare type ImageCollection = {
  data: {
    image: ImageMetadata;
    caption: Record<string, string>;
  }[];
};

export { default as ContentCarousel } from './ContentCarousel.astro';
export { default as ContentLightbox } from './ContentLightbox.astro';
