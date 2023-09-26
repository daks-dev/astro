import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
  const utilities = {
    '.animation-paused': {
      'animation-play-state': 'paused'
    },
    '.animation-running': {
      'animation-play-state': 'running'
    }
  };
  addUtilities(utilities);
});
