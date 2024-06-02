import Link from "next/link";

export default function Button({ content }: 
    { content: string }) {
    return (
        <button className="rounded-md
        px-4 py-2 bg-compGreen
        border-2 border-compGreen
        font-bold text-white
        transition-colors
        hover:bg-compGreenShade
        hover:border-compGreenShade
        select-none">
            {content}
        </button>
    );
}