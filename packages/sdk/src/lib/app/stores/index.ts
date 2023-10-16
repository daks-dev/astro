import { atom, deepMap, map, onMount } from 'nanostores';

export const meta = map<Record<string, Meta>>({});

export const status = deepMap<Record<string, Record<string, Meta>>>({});

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});

export const page = map<{
  url: URL;
  request: Request;
}>({
  url: {} as URL,
  request: {} as Request
});

onMount(page, () => {
  page.set({
    url: new URL(location?.toString()),
    request: {} as Request
  });
});
