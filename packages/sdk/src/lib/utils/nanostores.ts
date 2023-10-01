import { atom } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';
import { onMount } from 'nanostores';

export const twmerge = atom<Record<string, Record<string, string[]>[]>>({});

export const settings = persistentMap<{
  sidebar: boolean;
  theme: 'dark' | 'light' | 'auto';
}>(
  'settings',
  {
    sidebar: false,
    theme: 'auto'
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const settingsTheme = () => {
  function set() {
    const t = settings.get().theme;
    const l = document.documentElement.classList;
    if (t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches))
      l.add('dark');
    else l.remove('dark');
  }
  set();
  document.addEventListener('astro:after-swap', set);
};

export const metadata = persistentAtom<Metadata>(
  'metadata',
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

export const timer = persistentAtom<number>('timer', 0, {
  encode: (val) => val.toString(),
  decode: (val) => (val ? Number(val) : 0)
});

onMount(timer, () => {
  const interval = setInterval(() => {
    timer.set(timer.get() + 1);
  }, 1000);
  return () => {
    clearInterval(interval);
  };
});

export const timerFormat = (s: number) => {
  const d = Math.floor(s / (3600 * 24));
  const h = Math.floor((s % (3600 * 24)) / 3600);
  const m = Math.floor((s % 3600) / 60);
  s = Math.floor(s % 60);
  return (
    (d ? `${d.toString()} - ` : '') +
    (h ? `${h.toString().padStart(2, '0')}:` : '') +
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  );
};
