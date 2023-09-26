<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';

  export let title: string;
  export let counter: number | string;
  export let request: { url: string; referrer: URL | string };

  const referer = typeof request.referrer === 'string' ? request.referrer : request.referrer.href;

  if (BROWSER) {
    let interval: Timeout;
    const hit = () =>
      (interval = setInterval(() => {
        if (typeof ym !== 'undefined') {
          ym(counter, 'hit', request.url, { title, referer });
          clearInterval(interval);
        }
      }, 75));
    onMount(() => (hit(), () => clearInterval(interval)));
  }
</script>
