import { atom, deepMap, map, onMount } from 'nanostores';

type Metadata =
  | string
  | string[]
  | number
  | boolean
  | ((...x: unknown[]) => unknown)
  | null
  | undefined;
export const meta = deepMap<Record<string, Metadata | Record<string, Metadata>>>({});

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});

export const page = map<{
  url: URL;
}>({
  url: {} as URL
});

onMount(page, () => {
  typeof location !== 'undefined' && page.set({ url: location as unknown as URL });
});
