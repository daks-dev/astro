//import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

import 'dotenv/config';
import { breakpoint } from '../resolve';

import { default as screens } from '../screens';

import { default as animationPlayState } from '../plugins/animation-play-state';
import { default as aria } from '../plugins/aria';
import { default as base } from '../plugins/base';
import { default as components } from '../plugins/components';
import { default as forcedColors } from '../plugins/forced-colors';
import { default as gridArea } from '../plugins/grid-area';
import { default as gradient } from '../plugins/gradient';
import { default as lazy } from '../plugins/lazy';
import { default as onscroll } from '../plugins/onscroll';
import { default as oversee } from '../plugins/oversee';
import { default as ready } from '../plugins/ready';
import { default as utilities } from '../plugins/utilities';
import { default as strokeLinecap } from '../plugins/svg/stroke-linecap';
import { default as strokeLinejoin } from '../plugins/svg/stroke-linejoin';
import { default as vectorEffect } from '../plugins/svg/vector-effect';

const sort = (obj: Record<string, unknown>): NonNullable<unknown> =>
  Object.keys(obj)
    .sort()
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as Record<string, unknown>);

export default {
  content: [
    './node_modules/@daks.dev/astro.sdk/dist/**/*.{html,js,jsx,ts,tsx,md,mdx,astro,svelte}'
  ],

  darkMode: ['class', '.theme-dark'],

  theme: {
    screens: screens({ bp: breakpoint, min: true, max: true }),
    aspectRatio: sort({
      '3/4': '3 / 4',
      '4/3': '4 / 3',
      A4: '620 / 877',
      A4l: '877 / 620',
      ...defaultTheme.aspectRatio
    }),
    backgroundImage: {},
    backgroundSize: sort({
      '75%': '75%',
      '50%': '50%',
      '33%': '33.333333%',
      '25%': '25%',
      '20%': '20%',
      '10%': '10%',
      '5%': '5%',
      ...defaultTheme.backgroundSize
    }),
    fontSize: sort({
      '3xs': '0.5rem',
      '2xs': '0.625rem',
      '1.5xl': '1.375rem',
      '2.5xl': '1.6875rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      ...defaultTheme.fontSize
    }),
    extend: {
      borderRadius: {
        '4xl': '3rem',
        '5xl': '4.5rem'
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px var(--tw-shadow-color)'
      },
      container: {
        center: true
      },
      content: {
        null: '""'
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      spacing: {
        inherit: 'inherit',
        unset: 'unset'
      },
      strokeWidth: {
        '8': '8px',
        '16': '16px',
        '32': '32px'
      }
    }
  },

  plugins: [
    base,
    components,
    utilities,
    animationPlayState,
    aria,
    forcedColors,
    gradient,
    gridArea,
    onscroll,
    oversee,
    ready,
    strokeLinecap,
    strokeLinejoin,
    vectorEffect,
    lazy
  ]
} satisfies Config;
