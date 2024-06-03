"use client"

import Button from "~/app/_components/Button";
import { Card } from "@radix-ui/themes";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { navAtom } from "~/server/lib/stores";

export default function Page() {
    const [navVisible, setNavVisible] = useAtom(navAtom);

    useEffect(() => {
        setNavVisible(true);
    }, []);

    return (
        <div className="absolute h-full w-full overflow-scroll
                bg-bgblack text-white">
            <div className="flex flex-1 h-full items-center
            justify-center">
                <Card size={"4"} variant={"classic"}
                className="border border-[#2C2F33]
                p-8 rounded-lg bg-transparent justify-left
                w-[300px] sm:w-[400px]">
                    <h1 className="font-bold
                    text-2xl mb-8"
                    >
                        Upload A Profile Picture
                    </h1>
                    <form>
                        <div className="mb-5 flex flex-col">
                            <input type="file"
                            accept="image/*"
                            required
                             />
                        </div>
                        <div className="flex flex-row justify-end">  
                            <Button content="Continue" type="submit" />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}