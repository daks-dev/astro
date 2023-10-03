import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import common from './src/lib/tailwind/presets/common';
import { fontSans } from './src/lib/tailwind/font-family';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}'],

  presets: [common],

  theme: {
    extend: {
      fontFamily: fontSans()
    }
  },

  plugins: [typography]
} satisfies Config;
