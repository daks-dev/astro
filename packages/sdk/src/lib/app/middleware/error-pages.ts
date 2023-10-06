// import type { MiddlewareResponseHandler } from 'astro';
import { defineMiddleware } from 'astro:middleware';

type Config = {
  path: string;
  logger: boolean;
};

const defaultConfig: Config = {
  path: '/error-pages',
  logger: true
};

export default (config: Partial<Config> = {}) => {
  config = {
    ...defaultConfig,
    ...config
  };

  return defineMiddleware(async ({ redirect }, next) => {
    try {
      const response = await next();

      if (response.status > 399) {
        return redirect(`${config.path}/${response.status}`);
      }

      return response;
    } catch (e) {
      if (config.logger) {
        console.log(e);
      }

      return redirect(`${config.path}/500`);
    }
  });
};
