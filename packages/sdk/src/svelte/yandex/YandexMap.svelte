<script
  context="module"
  lang="ts">
  export type YandexMapInstance = Record<
    string,
    Record<string, (...x: unknown[]) => Record<string, () => unknown>>
  >;
</script>

<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { uuid } from '../../native';

  let className: ClassName = undefined;
  export { className as class };

  export let data: {
    state: Record<string, unknown>;
    options: Record<string, unknown>;
    locations: Record<string, unknown>[];
  };
  data.options = {
    ...data.options,
    ...{
      // avoidFractionalZoom: false,
      // autoFitToViewport: 'always',
      suppressMapOpenBlock: true
    }
  };

  export let apikey: string | undefined = undefined;
  export let lang = 'ru_RU';
  const params = new URLSearchParams({
    lang,
    ...(apikey ? { apikey } : {})
  }).toString();

  export let tag = 'div';

  const id = uuid();

  function upload(): boolean {
    return typeof ymaps !== 'undefined' && ymaps?.Map && ymaps?.Placemark;
  }

  // TODO:
  // map.events.add('actiontick', () => map.action.getCurrentState());
  // console.log(state.zoom, state.globalPixelCenter);
  export let map: YandexMapInstance = {};
  export const get = () => map;

  let interval: Timeout;
  function mount(): void {
    interval = setInterval(() => {
      if (upload()) {
        map = new ymaps.Map(id, data.state, data.options);
        data.locations?.forEach((location) => {
          map.geoObjects.add(
            new ymaps.Placemark(location.geometry, location.properties, location.options)
          );
        });
        clearInterval(interval);
      }
    }, 75);
  }

  if (BROWSER)
    onMount(() => {
      if (upload()) mount();
      else {
        const src = `https://api-maps.yandex.ru/2.1/?${params}`;
        if (!document.head.querySelector(`script[src="${src}"]`)) {
          const el = document.createElement('script');
          el.src = src;
          el.async = true;
          document.head.appendChild(el);
          el.addEventListener('load', mount, { once: true });
        } else mount();
      }
      return () => clearInterval(interval);
    });
</script>

<svelte:element
  this={tag}
  on:mousedown|preventDefault|stopPropagation
  on:mouseup|preventDefault|stopPropagation
  on:touchstart|passive|stopPropagation
  on:touchend|passive|stopPropagation
  {id}
  class:list={[className]}
  role="button"
  tabindex="-1" />
