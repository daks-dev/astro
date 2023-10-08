export type Behaviour = '' | 'hide' | 'loop';

export interface Options {
  behaviour: Behaviour;
  swipe: boolean;
  wheel: boolean;
  clickableClose: boolean;
  buttonClose: boolean;
  buttonFullscreen: boolean;
  enableKeyboard: boolean;
  bodyScroll: boolean;
  duration: number;
}

export type Custom = {
  [x in 'overlay' | 'header' | 'footer' | 'item']: ClassName;
} & {
  inner: Record<string, ClassName>;
};

export interface Item {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export type Status =
  | undefined
  | {
      countItems: number;
      activeItem: number;
    };

export type Loader = undefined | (() => void);

export { default as Lightbox } from './Lightbox.svelte';
export { default as LightboxList } from './LightboxList.svelte';
export { default as LightboxModal } from './LightboxModal.svelte';
export { default as LightboxThumbnail } from './LightboxThumbnail.svelte';
