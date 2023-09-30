import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('step', '&[aria-current="step"]');
  addVariant('page', '&[aria-current="page"]');
});
