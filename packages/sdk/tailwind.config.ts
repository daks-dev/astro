import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import common from './src/styles/tailwind/presets/common';
import fontFamily from './src/styles/tailwind/font-family';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}'],

  presets: [common],

  theme: {
    extend: {
      fontFamily: fontFamily()
    }
  },

  plugins: [typography]
} satisfies Config;
