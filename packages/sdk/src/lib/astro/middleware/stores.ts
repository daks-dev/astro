// import type { MiddlewareResponseHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';
import { page } from '../../app/stores';

export default () =>
  defineMiddleware(({ url, request }, next) => {
    page.set({
      url,
      request
    });
    return next();
  });
