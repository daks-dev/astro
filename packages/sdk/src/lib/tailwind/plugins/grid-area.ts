import plugin from 'tailwindcss/plugin';

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'grid-area': (value, { modifier }) => {
        // if there are both value and modifier
        // modifier will override value anyway
        // `grid-area-[header]/footer` will generate `grid-area: footer`
        if (modifier !== null) {
          value = modifier;
        }

        return {
          'grid-area': value
        };
      }
    },
    {
      values: Object.assign(theme('gridArea', {}), {
        DEFAULT: 'auto',
        auto: 'auto',
        inherit: 'inherit',
        initial: 'initial',
        revert: 'revert',
        layer: 'revert-layer',
        unset: 'unset'
      }),
      modifiers: 'any'
    }
  );

  matchUtilities(
    {
      'grid-areas': (value) => ({
        'grid-template-areas': value
      })
    },
    {
      values: theme('gridAreas', {})
    }
  );
});
