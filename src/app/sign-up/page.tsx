"use client";

import { Card } from "@radix-ui/themes";
import Button from "../_components/Button";
import { useState } from "react";
import { signup } from "~/server/lib/auth";
import toast from 'react-hot-toast';

import {
    ImEye,
    ImEyeBlocked
} from 'react-icons/im';

export default function Page() {
    const [toggle, setToggle] = useState<boolean>(false);

    const handleCreation = async (e: FormData) => {
        const response = await signup(e);

        if (response.error) {
            toast.error(response.error);
        }
    };

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
                        Create An Account
                    </h1>
                    <form action={handleCreation}>
                        <div className="mb-5 flex flex-col">
                            <p className="font-bold text-lg">Username</p>
                            <input type="text"
                            name="username"
                            placeholder="Enter a username"
                            className="text-white rounded-md
                            bg-transparent border border-[#2c2f33]
                            p-1 outline-none"
                            required
                             />
                        </div>
                        <div className="mb-5 flex flex-col justify-center">
                            <p className="font-bold text-lg">Password</p>
                            <div className="flex flex-row items-center
                            justify-end w-full relative">
                                <input type={toggle ? "text" : "password"}
                                name="password"
                                placeholder="Enter a password"
                                className="text-white rounded-md
                                bg-transparent border border-[#2c2f33]
                                p-1 outline-none w-full"
                                required
                                />
                                <button
                                type="button"
                                className="absolute right-4"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setToggle(!toggle)}}
                                    >
                                    {!toggle && <ImEyeBlocked />}
                                    {toggle && <ImEye />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-5 flex flex-col justify-center">
                            <p className="font-bold text-lg">Email</p>
                            <input type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="text-white rounded-md
                            bg-transparent border border-[#2c2f33]
                            p-1 outline-none"
                            required
                             />
                        </div>
                        <div className="flex flex-row justify-end">  
                            <Button content="Sign up" type="submit" />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}