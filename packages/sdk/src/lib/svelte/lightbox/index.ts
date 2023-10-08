export type Behaviour = 'loop' | 'hide';

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
  overlay: ClassName;
  header: ClassName;
  footer: ClassName;
  item: ClassName;
  inner: Record<string, ClassName>;
};

export interface Item {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export type Status =
  | {
      countItems: number;
      activeItem: number;
    }
  | undefined;

export type Loader = (() => void) | undefined;

export { default as Lightbox } from './Lightbox.svelte';
export { default as LightboxList } from './LightboxList.svelte';
export { default as LightboxModal } from './LightboxModal.svelte';
export { default as LightboxThumbnail } from './LightboxThumbnail.svelte';
