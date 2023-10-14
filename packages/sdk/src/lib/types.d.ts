/// <reference types="astro/client" />
/// <reference types="svelte" />

// type Astro = import('astro').AstroGlobal;
// declare const Astro: Readonly<Astro>;

declare module '*.astro' {
  type AstroComponentFactory = import('astro/runtime/server/index.js').AstroComponentFactory;
  const Component: AstroComponentFactory;
  export default Component;
}

declare type Timeout = string | number | NodeJS.Timeout | undefined;

declare type Meta = string | number | boolean | null | undefined;
declare interface Metadata {
  [x: string]: Meta;
}

declare type ClassName = string | false | 0 | ClassName[] | null | undefined;

declare type Attribute = string | null | undefined;

declare interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: 'heic' | 'heif' | 'avif' | 'jpeg' | 'jpg' | 'png' | 'tiff' | 'webp' | 'gif' | 'svg';
  orientation?: number;
}
declare interface ImageResult {
  src: string;
  attributes: Metadata;
}

declare namespace App {
  // interface Locals {}
}
