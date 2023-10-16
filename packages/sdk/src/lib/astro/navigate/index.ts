import type { HTMLAttributes } from 'astro/types';

export declare interface NavItem extends Omit<HTMLAttributes<'a'>, 'class'> {
  class?: ClassName;
  label?: string;
  handle?: (...x: unknown[]) => unknown;
  disallow?: boolean;
  links?: NavItem[];
}

export declare interface NavSite {
  navbar: {
    links: NavItem[];
  };
  draver?: {
    links: NavItem[];
  };
  footer?: {
    links?: NavItem[];
  };
  allow?: string[];
}

export { default as Link } from './Link.astro';
export { default as NavHome } from './NavHome.astro';
export { default as NavToTop } from './NavToTop.astro';
