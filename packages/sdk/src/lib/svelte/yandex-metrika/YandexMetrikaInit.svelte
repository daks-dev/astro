<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';

  type Options = {
    clickmap: boolean;
    trackLinks: boolean;
    accurateTrackBounce: boolean;
    trackHash: boolean;
    webvisor: boolean;
  };

  export let counter: number | string;
  export let options: Partial<Options> = {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    trackHash: true
  };
  export let type = '';

  function init() {
    ym(counter, 'init', options);
  }

  if (BROWSER && counter)
    onMount(() => {
      // TODO:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (function (w: any, y) {
        w[y] = function () {
          (w[y].a = w[y].a || []).push(arguments);
        };
        w[y].l = Number(new Date());
      })(window, 'ym');
      const src = `https://mc.yandex.ru/metrika/tag.js`;
      if (!document.head.querySelector(`script[src="${src}"]`)) {
        const el = document.createElement('script');
        el.src = src;
        el.async = true;
        if (type) el.type = type;
        el.addEventListener('load', init, { once: true });
        document.head.appendChild(el);
      }
    });
</script>

<!--svelte:head>
  {#if counter}
    <meta
      http-equiv="Content-Security-Policy"
      content="
        connect-src 'self' https://mc.yandex.ru;
        script-src 'self' 'unsafe-inline' https://mc.yandex.ru https://yastatic.net;
        img-src 'self' https://mc.yandex.ru" />
  {/if}
</svelte:head-->

{#if counter}
  <noscript>
    <div>
      <img
        src="https://mc.yandex.ru/watch/{counter}"
        style="position:absolute; left:-9999px;"
        alt="" />
    </div>
  </noscript>
{/if}
