import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
}

export default function Select({ options, ...props }: Props) {
    return (
        <select
            className="bg-gray-50 border border-gray-300 rounded-full text-gray-900 text-sm block w-40 px-5 py-2.5 mx-1"
            {...props}
        >
            <option value="Select Root Node" disabled>
                Select Root Node
            </option>
            {options.map((option, index) => (
                <option key={`${option}-${index}`} value={option}>
                    {option}
                </option>
            ))}{" "}
        </select>
    );
}
