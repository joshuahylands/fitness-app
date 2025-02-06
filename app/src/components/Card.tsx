import { PropsWithChildren } from 'react';

export default function Card(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`${props.className} p-6 bg-neutral-300 dark:bg-neutral-800 rounded-lg shadow-xl`}>
      {props.children}
    </div>
  );
}
