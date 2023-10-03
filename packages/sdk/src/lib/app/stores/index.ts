import { atom, map } from 'nanostores';

export * as persisten from './persistent';

type Metadata =
  | string
  | string[]
  | number
  | boolean
  | ((...x: unknown[]) => unknown)
  | null
  | undefined;
export const meta = map<
  Record<string, Metadata | Metadata[] | Record<string, Metadata | Metadata[]>>
>({});

export const page = atom<{
  url: URL;
  request: Request;
}>({
  url: new URL('http:/x.y'),
  request: new Request('http:/x.y')
});

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});
