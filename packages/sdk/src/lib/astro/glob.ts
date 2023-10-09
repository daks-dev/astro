let navbar: HTMLElement | null;

document.addEventListener('astro:page-load', () => {
  document.body.classList.add('page-load');
  navbar = document.querySelector('[data-navbar]');
});

document.addEventListener('astro:after-swap', () => {
  const links = document.querySelectorAll('[data-navbar] a');
  links.forEach((el) => {
    const href = el.getAttribute('href');
    if (href && href[0] === '/')
      if (href === location.pathname || href === `${location.pathname}/`)
        el.setAttribute('aria-current', 'page');
      else if (location.pathname.indexOf(`${href}/`) >= 0) el.setAttribute('aria-current', 'step');
      else el.removeAttribute('aria-current');
  });
});

window.addEventListener('scroll', () => {
  console.log(navbar?.clientHeight);
  if (navbar)
    window.scrollY > navbar.clientHeight
      ? document.body.classList.add('scrolled')
      : document.body.classList.remove('scrolled');
});
