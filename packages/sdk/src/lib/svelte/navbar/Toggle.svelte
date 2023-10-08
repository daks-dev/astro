<script lang="ts">
  import twMerge from '../../tailwind/tailwind-merge';

  let className: ClassName = undefined;
  export { className as class };

  export let hidden: boolean;
  export let toggle: () => void;
</script>

<button
  on:click={toggle}
  id="navbar-toggle"
  class={twMerge(className)}
  aria-label="toggle menu"
  aria-expanded={!hidden}
  aria-controls="navbar-menu">
  <slot>
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
    </svg>
  </slot>
</button>
