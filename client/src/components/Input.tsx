import { cn } from "@/utils";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: Props) {
    return (
        <input
            type="text"
            className={cn(
                "bg-gray-50 border border-gray-300 w-full text-gray-900 font-medium text-sm rounded-full block px-5 py-2.5 mx-1",
                className
            )}
            {...props}
        />
    );
}
