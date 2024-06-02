import Link from "next/link";

export default function Button({ content }: 
    { content: string }) {
    return (
        <button className="rounded-md
        px-4 py-2 bg-byzantium
        border-2 border-byzantium
        font-bold text-white
        transition-colors
        hover:bg-byzantshade
        hover:border-byzantshade
        select-none">
            {content}
        </button>
    );
}