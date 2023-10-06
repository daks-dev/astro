// @ts-nocheck
import type { Plugin } from 'vite';
import { imagetools as fn } from 'vite-imagetools';

export default (format: string | number = 'webp', quality: number = 80): Plugin =>
  fn({
    defaultDirectives: (url) => {
      if (typeof format === 'number') {
        quality = format;
        format = 'webp';
      }
      return new URLSearchParams(
        url.search
          ? {
              format,
              quality: quality.toString(),
              fit: 'cover',
              background: 'transparent',
              ...(url.searchParams.has('url')
                ? { as: 'url' }
                : url.searchParams.has('srcset')
                ? { as: 'srcset' }
                : url.searchParams.has('picture')
                ? { as: 'picture' }
                : url.searchParams.has('meta') || url.searchParams.has('metadata')
                ? { as: 'meta:src;width;height' }
                : {})
            }
          : undefined
      );
    }
  });
