// @ts-nocheck
import type { Plugin } from 'vite';
import { minify, type Options } from 'html-minifier-terser';

const minification: Options = {
  caseSensitive: true,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: true, //+  error Svelte render {@html ...}
  // continueOnParseError: true, //?
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  //preserveLineBreaks: true, //+
  removeAttributeQuotes: true,
  //removeComments: true, //- error Svelte CSR head tags modify
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  //removeTagWhitespace: true, //- error FF analise code
  useShortDoctype: true
};

export default (options?: Options): Plugin => ({
  name: 'vite-plugin-minify',
  enforce: 'post',
  apply: 'build',
  transformIndexHtml: async (html: string) =>
    await minify(html, {
      ...minification,
      ...options
    })
});
