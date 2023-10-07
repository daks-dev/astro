// import type { MiddlewareResponseHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';
import { page } from '../stores';

export default () =>
  defineMiddleware(async ({ url }, next) => {
    page.set({
      url
    });
    return next();
  });
