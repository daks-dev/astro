/*
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwind from 'tailwind.config';

const config = resolveConfig(tailwind) as never;

const {
  theme: {
    screens: { bp: breakpoint }
  }
} = config;
*/

const bp = process.env?.BREAKPOINT;

export const breakpoint =
  bp && /^[1-9]\d{2,3}$/.test(bp) ? `${bp}px` : bp && /^[1-9]\d{2,3}px$/.test(bp) ? bp : '800px';
