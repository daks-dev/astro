export const uuid = () =>
  '_' +
  Math.floor((1 + Math.random()) * 0x10000000)
    .toString(16)
    .substring(1);

export const isHover = () => window?.matchMedia('(hover: hover)').matches;

export const isTouch = () =>
  window?.matchMedia('(pointer: coarse)').matches ||
  navigator?.maxTouchPoints > 0 ||
  (document && 'ontouchstart' in document.documentElement);

export type { LazyLoad } from './lazyload';

export { default as Animate } from './Animate';
export { default as lazyload } from './lazyload';
export { default as Swipe, swipe } from './Swipe';
export { default as Wheel, wheel } from './Wheel';

export * as audio from './audio';
export { default as outside } from './outside';
export * as scroll from './scroll';
