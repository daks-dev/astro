import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('onscroll', ['&.scrolled', '.scrolled &']);
});
