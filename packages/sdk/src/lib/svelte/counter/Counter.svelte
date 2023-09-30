<script lang="ts">
  export let count = 0;

  function add() {
    count += 1;
  }
  function subtract() {
    count -= 1;
  }
</script>

<div class="mb-4 grid select-none grid-cols-3 place-items-center text-5xl leading-none">
  <button
    class="hover:text-rose-700"
    on:click={subtract}>
    -
  </button>
  <div class="font-mono text-slate-400">{count}</div>
  <button
    class="hover:text-emerald-700"
    on:click={add}>
    +
  </button>
</div>

<slot />
