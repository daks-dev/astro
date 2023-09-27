export type YandexMapInstance = Record<
  string,
  Record<string, (...x: unknown[]) => Record<string, () => unknown>>
>;

export { default as YandexMap } from './YandexMap.svelte';
export { default as YandexMetrikaHit } from './yandex-metrika/YandexMetrikaHit.svelte';
export { default as YandexMetrikaInit } from './yandex-metrika/YandexMetrikaInit.svelte';
