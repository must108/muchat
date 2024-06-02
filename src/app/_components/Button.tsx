"use client";

import { useState, useEffect } from 'react';

export default function Button({ content, type = "button" }: ButtonProps) {
    return (
        <button className={`rounded-md
        px-4 py-2 font-bold text-white
        bg-compGreen
        hover:bg-compGreenShade
        transition-colors
        select-none`}
        type={type}>
            {content}
        </button>
    );
}

export function UnderlineButton({ content }: 
    { content: string }) {
        return (
            <button className={`rounded-md
            px-4 py-2 font-bold text-white
            bg-transparent
            hover:underline
            transition-colors
            select-none`}>
                {content}
            </button>
        );
}

interface ButtonProps {
    content: string,
    type?: "button" | "submit" | "reset";
}