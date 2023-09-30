import defaultTheme from 'tailwindcss/defaultTheme';

export const fontSans = (font: string | string[] = []) => {
  if (typeof font === 'string') font = [font];
  return {
    sans: [...font, 'Roboto', '"Helvetica Neue"']
      .concat(defaultTheme.fontFamily.sans)
      .filter((item, pos, array) => array.indexOf(item) === pos)
  };
};
