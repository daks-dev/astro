import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  const utilities = {
    '.linejoin-arcs': {
      'stroke-linejoin': 'arcs'
    },
    '.linejoin-bevel': {
      'stroke-linejoin': 'bevel'
    },
    '.linejoin-miter': {
      'stroke-linejoin': 'miter'
    },
    '.linejoin-miter-clip': {
      'stroke-linejoin': 'miter-clip'
    },
    '.linejoin-round': {
      'stroke-linejoin': 'round'
    }
  };
  addUtilities(utilities);
});
