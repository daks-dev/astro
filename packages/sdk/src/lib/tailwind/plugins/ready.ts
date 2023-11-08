import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('onload', ['&.loaded', '.loaded &']);
  addVariant('onswap', ['&.swapped', '.swapped &']);
  addVariant('ready', ['&:where(.loaded, .swapped)', ':where(.loaded, .swapped) &']);
});
