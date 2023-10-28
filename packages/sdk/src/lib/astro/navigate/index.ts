/*
import type { HTMLAttributes } from 'astro/types';

export declare interface NavItem extends Omit<HTMLAttributes<'a'>, 'class'> {
  class?: ClassName;
  label?: string;
  handle?: (...x: unknown[]) => unknown;
  disallow?: boolean;
  items?: NavItem[];
}
*/

import type { IconsKeys } from '../icon';

export declare interface NavLink {
  id?: string;
  rel?: string;
  role?: astroHTML.JSX.AriaRole | null;
  class?: ClassName;
  style?: string;
  href?: string;
  target?: astroHTML.JSX.HTMLAttributeAnchorTarget | null;
  title?: string;
  itemporp?: string;
}

export declare interface NavItem extends NavLink {
  label?: string;
  icon?: IconsKeys | (string & NonNullable<unknown>);
  disallow?: true;
  items?: NavItem[];
}

export declare interface NavSite {
  navbar: {
    items: NavItem[];
  };
  draver?: {
    items: NavItem[];
  };
  footer?: {
    items: NavItem[];
  };
  allow?: string[];
}

export { default as Link } from './Link.astro';
export { default as NavHome } from './NavHome.astro';
export { default as NavToTop } from './NavToTop.astro';
