import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="group relative flex flex-col">
      <span className="absolute left-2 -translate-y-[50%] px-1 bg-card-theme group-focus-within:text-rose-500 transition">
        {props.placeholder || ''}
      </span>
      <input
        className="p-4 border-1 rounded-md outline-0 focus:border-rose-500 transition"
        {...props}
        placeholder=""/>
    </div>
  );
}
