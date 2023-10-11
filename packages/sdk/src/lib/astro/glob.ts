import { meta } from '../app/stores';

let navbar: HTMLElement | null;

document.addEventListener('astro:page-load', () => {
  document.body.classList.add('loaded');
  navbar = document.querySelector('[data-navbar]');
});
/*
document.addEventListener('astro:after-swap', () =>
  document.querySelectorAll('[data-navbar] a').forEach((el) => {
    const href = el.getAttribute('href');
    if (href && href[0] === '/')
      if (href === location.pathname || href === `${location.pathname}/`)
        el.setAttribute('aria-current', 'page');
      else if (location.pathname.indexOf(`${href}/`) >= 0) el.setAttribute('aria-current', 'step');
      else el.removeAttribute('aria-current');
  })
);
*/
window.addEventListener(
  'scroll',
  () => navbar && meta.setKey('scrolled', window.scrollY > navbar.clientHeight)
);

meta.listen(
  (val, key) =>
    key === 'scrolled' &&
    (val.scrolled
      ? document.body.classList.add('scrolled')
      : document.body.classList.remove('scrolled'))
);
