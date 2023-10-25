import { defineMiddleware } from 'astro:middleware';
import { minify, type Options } from 'html-minifier-terser';

const defaultOptions: Options = {
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

export default (options: Options) => {
  options = Object.assign(defaultOptions, options);

  return defineMiddleware(async (_, next) => {
    const response = await next();
    if (response.headers.get('content-type') === 'text/html') {
      const headers = response.headers;
      const html = await response.text();
      const data = await minify(html, options);
      return new Response(data, {
        status: 200,
        headers
      });
    }
    return response;
  });
};
