export interface IconBandle {
  [x: string]:
    | string
    | {
        body: string;
        view?: string;
      };
}

export { default as Icon } from './Icon.astro';
export { default as bundle, type IconKeys } from '../../app/icons';
