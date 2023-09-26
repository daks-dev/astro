import { getDefaultConfig, mergeConfigs, extendTailwindMerge, type Config } from 'tailwind-merge';

export const getTwClassGroup = (key?: string): void => {
  const config: Config = getDefaultConfig();
  console.log(key ? config.classGroups[key] : config.classGroups);
};

export const getTwConfig = (...configs: Array<Partial<Config>>) =>
  [
    {
      classGroups: {
        aspect: [{ aspect: ['3/4', '4/3', 'A4', 'A4l'] }],
        'bg-size': [{ bg: ['75%', '50%', '33%', '25%', '20%', '10%', '5%'] }],
        content: [{ content: ['null'] }],
        'font-size': [{ text: ['3xs', '2xs', '1.5xl', '2.5xl', '3.5xl', '4.5xl'] }],
        'list-style-type': [{ list: ['circle', 'square'] }]
      }
    },
    ...configs
  ].reduce((acc: Config, val) => mergeConfigs(acc, val), getDefaultConfig());

export default extendTailwindMerge((config: Config): Config => mergeConfigs(config, getTwConfig()));
