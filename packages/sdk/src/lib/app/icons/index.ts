// import type { IconBandle } from '../../astro/icon';
import common from './common';

const local =
  Object.values(
    import.meta.glob('$app/icons', {
      import: 'default',
      eager: true
    })
  )[0] ?? {};

const bundle = {
  ...common,
  ...local
};

export type IconKeysExt = keyof typeof bundle | (string & NonNullable<unknown>);
export type IconKeys = keyof typeof bundle;
export default bundle;
