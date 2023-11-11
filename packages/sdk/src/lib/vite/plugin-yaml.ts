// @ts-nocheck
import type { Plugin } from 'vite';
// import { createFilter, dataToEsm } from '@rollup/pluginutils';
// import { load } from 'js-yaml';

const defaultOptions = {
  include: /\.ya?ml$/,
  exclude: ''
};

export default (userOptions = {}): Plugin => {
  const pluginOptions = { ...defaultOptions, ...userOptions };
  const filter = createFilter(pluginOptions.include, pluginOptions.exclude);
  return {
    name: 'vite-plugin-yaml',
    enforce: 'pre',
    transform: async (code: string, id: string) =>
      filter(id)
        ? {
            code: dataToEsm(load(code)),
            map: { mappings: '' }
          }
        : null
  };
};
