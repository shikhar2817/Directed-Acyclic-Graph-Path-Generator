import { CrossIcon } from "@/icons";
import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    tagTitle: string;
    color?: "yellow" | "pink";
}

export default function Tag({ tagTitle, color = "yellow", ...props }: Props) {
    const colorStylesSpan = {
        yellow: "inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded m-1",
        pink: "inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded m-1",
    };
    const colorStylesIcon = {
        yellow: "inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900",
        pink: "inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900",
    };
    return (
        <span className={cn(colorStylesSpan[color])}>
            {tagTitle}
            <button type="button" className={cn(colorStylesIcon[color])} {...props}>
                <CrossIcon />
            </button>
        </span>
    );
}
