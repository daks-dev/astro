/// <reference types="astro/client" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}

/*
declare module '*.astro' {
  const component: unknown;
  export default component;
}
*/

declare type Timeout = string | undefined | number | NodeJS.Timeout;

declare interface Metadata {
  [x: string]: string | null | undefined;
}

declare type ClassName = string | string[] | null | undefined;
