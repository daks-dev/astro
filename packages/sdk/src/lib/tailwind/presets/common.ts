//import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

import { default as base } from '../plugins/base';
import { default as components } from '../plugins/components';
import { default as utilities } from '../plugins/utilities';
import { default as aria } from '../plugins/aria';
import { default as onscroll } from '../plugins/onscroll';
import { default as animationPlayState } from '../plugins/animation-play-state';
import { default as vectorEffect } from '../plugins/svg/vector-effect';

const sort = (obj: Record<string, unknown>) =>
  Object.keys(obj)
    .sort()
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), <Record<string, unknown>>{});

export default {
  content: ['./node_modules/@daks.dev/sdk/src/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte,vue}'],

  darkMode: 'class',

  theme: {
    screens: <Record<string, string | { max: string }>>sort({
      '-3xl': { max: '1679px' },
      '-2xl': { max: '1535px' },
      '-xl': { max: '1279px' },
      '-lg': { max: '1023px' },
      '-md': { max: '767px' },
      '-sm': { max: '639px' },
      '-xs': { max: '479px' },
      xs: '480px',
      ...defaultTheme.screens,
      '3xl': '1680px'
    }),
    fontSize: <Record<string, string>>sort({
      '3xs': '0.5rem',
      '2xs': '0.625rem',
      '1.5xl': '1.375rem',
      '2.5xl': '1.6875rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      ...defaultTheme.fontSize
    }),
    listStyleType: <Record<string, string>>sort({
      circle: 'circle',
      square: 'square',
      ...defaultTheme.fontSize
    }),
    backgroundSize: <Record<string, string>>sort({
      '75%': '75%',
      '50%': '50%',
      '33%': '33.333333%',
      '25%': '25%',
      '20%': '20%',
      '10%': '10%',
      '5%': '5%',
      ...defaultTheme.backgroundSize
    }),
    aspectRatio: <Record<string, string>>sort({
      '3/4': '3 / 4',
      '4/3': '4 / 3',
      A4: '620 / 877',
      A4l: '877 / 620',
      ...defaultTheme.aspectRatio
    }),
    content: <Record<string, string>>sort({
      null: '""',
      ...defaultTheme.content
    }),
    extend: {
      container: {
        center: true
      }
    }
  },

  plugins: [animationPlayState, aria, base, components, onscroll, utilities, vectorEffect]
} satisfies Config;
