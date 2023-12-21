import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: ReactNode;
}

export default function Button({ children, className, variant, ...props }: Props) {
    return (
        <button type="button" className={cn(buttonVariants({ variant }), className)} {...props}>
            {children}
        </button>
    );
}

const buttonVariants = cva("text-center inline-flex items-center rounded-full", {
    variants: {
        variant: {
            primary:
                "text-white bg-purple-600 hover:bg-purple-700 active:hover:bg-purple-900 font-medium text-sm px-5 py-2.5 text-center me-2 mx-2",

            secondary:
                "text-white bg-gray-500 hover:bg-gray-600 active:hover:bg-gray-800 font-medium text-sm px-3 py-2.5 text-center me-2 mx-2",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
