export type YandexMapInstance = Record<
  string,
  Record<string, (...x: unknown[]) => Record<string, () => unknown>>
>;

export { default as YandexMap } from './YandexMap.svelte';
