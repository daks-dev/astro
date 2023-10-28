export interface IconsBandle {
  [x: string]: {
    body: string;
    box?: 24 | 32 | 128 | 256 | (number & NonNullable<unknown>);
    size?: 24 | 32 | 44 | (number & NonNullable<unknown>);
  }
}

export { default as Icon } from './Icon.astro';
export { default as bundle } from './bundles';
