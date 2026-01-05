import { forwardRef } from "react";

const Input = forwardRef(function Input({ title, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full p-1 bprder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:ouline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full p-1 bprder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:ouline-none focus:border-stone-600"
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
