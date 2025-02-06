import { useMemo } from 'react';

type ProgressWheelProps = {
  current: number;
  total: number;
  color: string;
};

export default function ProgressWheel(props: ProgressWheelProps) {
  const percentage = useMemo(() => props.current / props.total * 100, [props.current, props.total]);
  const backgroundStyle = useMemo(() => (
    `conic-gradient(${props.color} ${percentage}%, transparent ${percentage}%)`
  ), [props.color, percentage]);

  return ( 
    <div
      className="flex justify-center items-center w-full aspect-square rounded-full"
      style={{background: backgroundStyle}}>
      <div className="flex flex-col justify-center text-center bg-theme w-4/5 h-4/5 rounded-full">
        <span className="font-bold">{props.current}</span>
        <span className="font-light"><span className="font-normal">/</span>{props.total}</span>
      </div>
    </div>
  );
}
