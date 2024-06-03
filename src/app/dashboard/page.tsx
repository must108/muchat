"use client";

import { useAtom } from "jotai"
import { navAtom } from "~/server/lib/stores"
import { userAtom } from "~/server/lib/stores";
import { useState, useEffect } from "react"
import { validateRequest } from "~/server/lib/auth";
import AccountButton from "../_components/AccountButton";

export default function Page() {
    const [navVisible, setNavVisible] = useAtom(navAtom);
    const [user, setUser] = useAtom(userAtom);

    async function fetchUser() {
        const data = await validateRequest();
        setUser(data.user);
    }

    useEffect(() => {
        setNavVisible(false);
        fetchUser();
    }, []);

    return (
        <div className="absolute h-full w-full overflow-scroll
        bg-bgblack text-white flex items-center justify-center">
            <div className="h-[90vh] w-full bg-[#2C2F33]">
                {/* <AccountButton user={user} /> */}
            </div>  
        </div>
    )
}