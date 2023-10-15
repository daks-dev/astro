import { /*action,*/ atom, deepMap, map, onMount } from 'nanostores';

export const meta = map<Record<string, Meta>>({});

export const status = deepMap<Record<string, Record<string, Meta>>>({});

onMount(status, () => status.setKey('navbar.hidden', false));
/*
export const statusNavbaHiddenCheck = action(
  status,
  'status.navbar.hidden.check',
  (store, force = false) => {
    if (window.innerWidth < 1024) store.setKey('navbar.hidden', true);
    else if (force) store.setKey('navbar.hidden', false);
  }
);
*/
export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});

export { page } from './svelte';
