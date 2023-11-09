// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  addUtilities({
    ['img.lazy-loaded']: {
      'background-image': 'none'
    },
    ['img:not([src]):not([srcset])']: {
      visibility: 'hidden'
    }
  });
});
