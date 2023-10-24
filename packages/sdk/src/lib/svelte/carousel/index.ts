export type Image = ImageResult & {
  caption: Record<string, string>;
};

export type Custom = {
  button: ClassName;
  progress: ClassName;
  item: ClassName;
  inner: Record<string, ClassName>;
};

export type Easing = (x: number) => number;

export type Tweening = (x?: number) => {
  duration: number;
  delay: number;
  easing: Easing;
};

export type Show = number | ((x: number) => number);

export type Controls = string | string[];

export type Loaded = ((x?: Event | HTMLElement) => void) | undefined;

export { default as Carousel } from './Carousel.svelte';
