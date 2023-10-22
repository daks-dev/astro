/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  semi: true,
  singleAttributePerLine: true,
  bracketSameLine: true,
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro'
      }
    },
    {
      files: ['**/*.svelte'],
      options: {
        parser: 'svelte'
      }
    }
  ]
};
