import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
};

function Select({ label, children }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-left">
        {label}
      </label>

      <select className="w-full bg-gray-900 rounded-lg p-3 border-r-[12px] border-transparent">
        {children}
      </select>
    </div>
  );
}

export default Select;
