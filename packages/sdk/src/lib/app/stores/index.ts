import { action, atom, deepMap, map, onMount } from 'nanostores';

export const meta = map<Record<string, Meta>>({});

export const site = deepMap<{
  navbar: {
    hidden: boolean;
  };
}>({
  navbar: {
    hidden: true
  }
});

//onMount(site, () => site.setKey('navbar.hidden', false));

export const siteNavbaHidden = action(site, 'site.navbar.hidden', (store, force = false) => {
  if (window.innerWidth < 1024) store.setKey('navbar.hidden', true);
  else if (force) store.setKey('navbar.hidden', false);
});

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});

export { page } from './svelte';

/*
export type Page = {
  url: URL;
  request: Request;
};
export const page = map<Page>({} as Page);

onMount(page, () => {
  if (typeof Astro === 'object') {
    const { url, request } = Astro;
    page.set({
      url,
      request
    } as Page);
  }
  typeof location !== 'undefined' && page.setKey('url', new URL(location.toString()));
});
*/
