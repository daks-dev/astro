import resolveConfig from 'tailwindcss/resolveConfig';
import tailwind from 'tailwind.config';

const config = resolveConfig(tailwind) as never;

const {
  theme: {
    screens: { bp: breakpoint }
  }
} = config;

export { breakpoint };
export default config;
