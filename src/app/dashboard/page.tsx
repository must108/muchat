"use client";

import { useAtom } from "jotai"
import { navAtom } from "~/server/lib/stores"
import { useState, useEffect } from "react"

export default function Page() {
    const [navVisible, setNavVisible] = useAtom(navAtom);

    useEffect(() => {
        setNavVisible(false);
    }, []);

    return (
        <div className="absolute h-full w-full overflow-scroll
        bg-bgblack text-white">

        </div>
    )
}