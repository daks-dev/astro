import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('forced-colors', '@media (forced-colors: active)');
});
