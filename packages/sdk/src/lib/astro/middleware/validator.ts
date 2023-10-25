import { defineMiddleware } from 'astro:middleware';

const limit = 50;

const loginInfo: {
  token?: string;
  currentTime?: number;
} = {};

export default () =>
  defineMiddleware(async (context, next) => {
    if (context.request.url.endsWith('/admin')) {
      if (loginInfo.currentTime) {
        const difference = new Date().getTime() - loginInfo.currentTime;
        if (difference > limit) {
          console.log('hit threshold');
          loginInfo.token = undefined;
          loginInfo.currentTime = undefined;
          return context.redirect('/login');
        }
      }
      // we naively check if we have a token
      if (loginInfo.token && loginInfo.token === 'loggedIn') {
        // we fill the locals with user-facing information
        context.locals.user = {
          uuid: crypto.randomUUID(),
          name: 'AstroUser',
          surname: 'AstroSurname'
        };
        return await next();
      } else {
        loginInfo.token = undefined;
        loginInfo.currentTime = undefined;
        return context.redirect('/login');
      }
    } else if (context.request.url.endsWith('/api/login')) {
      const response = await next();
      // the login endpoint will return to us a JSON with username and password
      const data = await response.json();
      // we naively check if username and password are equals to some string
      if (data.username === 'astro' && data.password === 'astro') {
        // we store the token somewhere outside of locals because the `locals` object is attached to the request
        // and when doing a redirect, we lose that information
        loginInfo.token = 'loggedIn';
        loginInfo.currentTime = new Date().getTime();
        return context.redirect('/admin');
      }
    }
    return next();
  });
