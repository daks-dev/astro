import { writable } from 'svelte/store';

type Page = {
  url: URL;
  request: Request;
};

export const page = (() => {
  // typeof location === 'undefined' ? ({} as URL) : new URL(location.toString()),
  const { set, subscribe } = writable<Page>({
    url: typeof location === 'undefined' ? ({} as URL) : new URL(location.toString()),
    request: {} as Request
    // url: typeof Astro === 'object' ? Astro.url : ({} as URL),
    // request: typeof Astro === 'object' ? Astro.request : ({} as Request)
  });
  return {
    subscribe,
    set // (val: number | string) => update(() => Number(val)),
  };
})();
