<script lang="ts">
  import twMerge from '../../tailwind/tailwind-merge';
  import { timer, timerFormat as format } from '../../app/stores/persistent';

  let className: ClassName = undefined;
  export { className as class };
</script>

<time class={twMerge(className)}>
  {format($timer)}
</time>
