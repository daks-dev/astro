<script lang="ts">
  import { onMount } from 'svelte';
  import twMerge from '../tailwind/tailwind-merge';

  let className: ClassName = 'bg-neutral-100 dark:bg-gray-800';
  export { className as class };

  export let delay: number | string = 75;
  export let duration: number | string = 5000;

  let node: HTMLElement;

  function close() {
    setTimeout(() => {
      node.style.transitionDuration = `${duration}ms`;
      node.style.pointerEvents = node.style.touchAction = 'none';
      node.style.opacity = '0';
      setTimeout(() => node.remove(), Number(duration));
    }, Number(delay));
  }

  onMount(close);
</script>

<div
  bind:this={node}
  class={twMerge(
    'fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center',
    'transition-opacity ease-out',
    className
  )}
  hidden>
  <slot>
    <svg
      class="3xl:w-[10vmin] w-[35vmin] sm:w-[30vmin] md:w-[25vmin] lg:w-[20vmin] 2xl:w-[15vmin]"
      viewBox="0 0 24 24"
      fill="currentColor">
      <rect
        width="10"
        height="10"
        x="1"
        y="1"
        rx="1">
        <animate
          id="_0"
          attributeName="x"
          fill="freeze"
          begin="0;_b.end"
          dur="0.2s"
          values="1;13" />
        <animate
          id="_1"
          attributeName="y"
          fill="freeze"
          begin="_8.end"
          dur="0.2s"
          values="1;13" />
        <animate
          id="_2"
          attributeName="x"
          fill="freeze"
          begin="_9.end"
          dur="0.2s"
          values="13;1" />
        <animate
          id="_3"
          attributeName="y"
          fill="freeze"
          begin="_a.end"
          dur="0.2s"
          values="13;1" />
      </rect>
      <rect
        width="10"
        height="10"
        x="1"
        y="13"
        rx="1">
        <animate
          id="_4"
          attributeName="y"
          fill="freeze"
          begin="_0.end"
          dur="0.2s"
          values="13;1" />
        <animate
          id="_5"
          attributeName="x"
          fill="freeze"
          begin="_1.end"
          dur="0.2s"
          values="1;13" />
        <animate
          id="_6"
          attributeName="y"
          fill="freeze"
          begin="_2.end"
          dur="0.2s"
          values="1;13" />
        <animate
          id="_7"
          attributeName="x"
          fill="freeze"
          begin="_3.end"
          dur="0.2s"
          values="13;1" />
      </rect>
      <rect
        width="10"
        height="10"
        x="13"
        y="13"
        rx="1">
        <animate
          id="_8"
          attributeName="x"
          fill="freeze"
          begin="_4.end"
          dur="0.2s"
          values="13;1" />
        <animate
          id="_9"
          attributeName="y"
          fill="freeze"
          begin="_5.end"
          dur="0.2s"
          values="13;1" />
        <animate
          id="_a"
          attributeName="x"
          fill="freeze"
          begin="_6.end"
          dur="0.2s"
          values="1;13" />
        <animate
          id="_b"
          attributeName="y"
          fill="freeze"
          begin="_7.end"
          dur="0.2s"
          values="1;13" />
      </rect>
    </svg>
  </slot>
</div>
