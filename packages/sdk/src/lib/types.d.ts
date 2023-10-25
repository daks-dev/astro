/// <reference types="astro/client" />
/// <reference types="svelte" />
/// <reference types="./assets" />

/*
type Astro = import('astro').AstroGlobal;
declare const Astro: Readonly<Astro>;
*/

declare module '*.astro' {
  type AstroComponentFactory = import('astro/runtime/server/index.js').AstroComponentFactory;
  const Component: AstroComponentFactory;
  export default Component;
}

/*
declare type Meta = string | number | boolean | null | undefined;
declare interface Metadata {
  [x: string]: Meta;
}
*/

declare type Meta = string | number | boolean | Meta[] | null | undefined;
declare interface Metadata {
  [x: string]: Meta | Metadata | Metadata[];
}

declare type ClassName = string | false | 0 | ClassName[] | null | undefined;

declare type Attribute = string | null | undefined;

declare namespace App {
  interface Locals {
    // lazyload: boolean;
  }
}
