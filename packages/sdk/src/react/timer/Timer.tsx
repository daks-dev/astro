import { useStore } from '@nanostores/react';
import { timer, timerFormat as format } from '../../utils/nanostore';
import twMerge from '../../tailwind/tailwind-merge';

export default function Timer({ className }: { className: ClassName }) {
  const $timer = useStore(timer);
  return <time className={twMerge(className)}>{format($timer)}</time>;
}
