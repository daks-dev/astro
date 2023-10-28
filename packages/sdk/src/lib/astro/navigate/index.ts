import type { IconsKeysExt } from '../../app/icons';

export interface NavLink {
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

export interface NavItem extends NavLink {
  label?: string;
  icon?: IconsKeysExt;
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
export { default as NavHome } from './NavHome.astro';
export { default as NavToTop } from './NavToTop.astro';
