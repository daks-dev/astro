/// <reference types="astro/client" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}

declare type Timeout = string | number | NodeJS.Timeout | undefined;

declare interface Metadata {
  [x: string]: string | null | undefined;
}

declare type ClassName = string | false | 0 | ClassName[] | null | undefined;
declare type ClassMap = Record<string, ClassName>;
declare type ClassList = Record<string, ClassName | ClassMap | ClassList>;
