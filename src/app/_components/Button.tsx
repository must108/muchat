"use client";

import { useState, useEffect } from 'react';

export default function Button({ content, style }: 
    { content: string, style: string }) {
    const [buttonStyle, setButtonStyle] = useState("");
    const [underlineHover, setUnderlineHover] = useState("");

    useEffect(() => {
        if (style === 'solid') {
            setButtonStyle("bg-compGreen");
            setUnderlineHover("hover:bg-compGreenShade");
        } else if (style === 'trans') {
            setButtonStyle("bg-transparent");
            setUnderlineHover("hover:underline")
        }
    }, []);

    return (
        <button className={`rounded-md
        px-4 py-2 font-bold text-white
        ${buttonStyle}
        ${underlineHover}
        transition-colors
        select-none`}>
            {content}
        </button>
    );
}