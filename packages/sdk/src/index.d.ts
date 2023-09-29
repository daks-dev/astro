/// <reference types="svelte" />
/// <reference types="vite/client" />

declare type Timeout = string | undefined | number | NodeJS.Timeout;

declare interface Metadata {
  [x: string]: string | null | undefined;
}

declare type ClassName = string | string[] | null | undefined;

declare module '*.astro' {
  const value: unknown;
  export default value;
}
