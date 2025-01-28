import { cn } from "@/app/utils/cn";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "success" | "error";
};

const variantStyles = {
  default: "bg-gray-900 hover:bg-gray-800 text-gray-300",
  primary: "bg-pink hover:bg-pink/90 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
} as const;

function Button({ variant = "default", children }: Props) {
  return (
    <button
      className={cn(
        "rounded-lg p-3 w-full transition-colors cursor-pointer",
        variantStyles[variant]
      )}
    >
      {children}
    </button>
  );
}

export default Button;
