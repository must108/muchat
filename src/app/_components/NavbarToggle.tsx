"use client";

import { navAtom } from "~/server/lib/stores";
import { useAtom } from "jotai";
import Navbar from "./Navbar";

export default function NavbarToggle() {
    const [navVisible] = useAtom(navAtom);

    return (
        <>
            {navVisible ? <Navbar /> : null}
        </>
    );
}