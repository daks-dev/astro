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

export { default as Animate } from './Animate.js';
export { default as Swipe, swipe } from './Swipe.js';
export { default as Wheel, wheel } from './Wheel.js';

export { default as audio } from './audio.js';
export { default as outside } from './outside.js';
export { default as scroll } from './scroll.js';
