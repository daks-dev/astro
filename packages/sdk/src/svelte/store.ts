import { readable } from 'svelte/store';

export const sessionTime = readable(0, (set) => {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);
  return function stop() {
    clearInterval(interval);
  };
});
