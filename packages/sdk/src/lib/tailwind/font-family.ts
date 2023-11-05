import defaultTheme from 'tailwindcss/defaultTheme';

export const fontSans = (font: string | string[] = []) => {
  if (typeof font === 'string') font = [font];
  return fontFamily([...font, 'Roboto', '"Helvetica Neue"'], 'sans');
};

const fontFamily = (font: string | string[] = [], family: 'mono' | 'sans' | 'serif') => {
  if (typeof font === 'string') font = [font];
  const res: Record<string, string[]> = {};
  res[family] = font
    .concat(defaultTheme.fontFamily[family])
    .filter((item, pos, array) => array.indexOf(item) === pos);
  return res;
};

export default fontFamily;
