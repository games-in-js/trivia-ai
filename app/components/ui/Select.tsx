import { cn } from "@/app/utils/cn";
import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

function Select({ label, className, children, ...props }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-left">
        {label}
      </label>

      <select
        className={cn(
          "w-full bg-gray-900 rounded-lg p-3 border-r-[12px] border-transparent",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
