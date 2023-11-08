import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('oversee', ['&:where(:hover, :focus)']);
});
