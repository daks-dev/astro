import { atom, deepMap, map } from 'nanostores';

type Metadata =
  | string
  | string[]
  | number
  | boolean
  | ((...x: unknown[]) => unknown)
  | null
  | undefined;
export const meta = deepMap<Record<string, Metadata | Record<string, Metadata>>>({});

export const page = map<{
  url: Partial<URL>;
  request: Partial<Request>;
}>({
  url: {},
  request: {}
});

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});
