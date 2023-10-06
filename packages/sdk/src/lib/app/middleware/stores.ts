// import type { MiddlewareResponseHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';
import { page } from '@daks.dev/sdk/stores';

export default () =>
  defineMiddleware(async ({ url, request }, next) => {
    page.set({
      url,
      request
    });
    return next();
  });
