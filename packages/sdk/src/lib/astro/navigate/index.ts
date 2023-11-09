import type { IconKeys } from '../../app/icons';

export interface NavLink {
  is?: string;
  id?: string;
  rel?: string;
  role?: astroHTML.JSX.AriaRole | null;
  class?: ClassName;
  style?: string;
  href?: string;
  target?: astroHTML.JSX.HTMLAttributeAnchorTarget | null;
  title?: string;
  itemprop?: string;
}

export interface NavItem extends NavLink {
  label?: string;
  icon?: IconKeys | (string & NonNullable<unknown>);
  size?: number | string;
  prefetch?: true;
  disallow?: true;
  items?: NavItem[];
}

export interface NavSite {
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
