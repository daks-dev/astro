/*
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwind from 'tailwind.config';

const {
  theme: {
    screens: { bp }
  }
} = resolveConfig(tailwind) as never;
*/

const bp = await import('tailwind.config')
  .then((val) => 'breakpoint' in val && String(val.breakpoint))
  .catch(() => {});

export const breakpoint =
  bp && /^[1-9]\d{2,3}$/.test(bp) ? `${bp}px` : bp && /^[1-9]\d{2,3}px$/.test(bp) ? bp : '800px';
