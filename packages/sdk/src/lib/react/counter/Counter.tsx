import { useState } from 'react';

export default function Counter({
  children,
  count: initialCount
}: {
  children: JSX.Element;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className='mb-4 grid select-none grid-cols-3 place-items-center justify-center text-5xl leading-none'>
        <button
          className='hover:text-rose-700'
          onClick={subtract}>
          -
        </button>
        <div className='font-mono text-slate-400'>{count}</div>
        <button
          className='hover:text-emerald-700'
          onClick={add}>
          +
        </button>
      </div>

      {children}
    </>
  );
}
