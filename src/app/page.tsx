"use client";

import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { navAtom } from '~/server/lib/stores';
import Tagline from "./_components/Tagline";

export default function Home() {
    const [navVisible, setNavVisible] = useAtom(navAtom);

    useEffect(() => {
        setNavVisible(true);
    }, []);

    return (
        <>
            <div className="absolute h-full w-full
            overflow-scroll"
            >
                <div
                    className="h-[100vh]"
                    style={{
                    backgroundImage: `url(/gradient.svg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <Tagline />
                </div>
            </div>
        </>
    );
}