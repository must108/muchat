"use client";

import {
    Popover,
    Avatar
} from "@radix-ui/themes";
import { DatabaseUserAttributes } from "~/server/lib/auth";

interface AccountButtonProps {
    user: DatabaseUserAttributes;
}

export default function AccountButton({ user }: AccountButtonProps) {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <div>
                    <Avatar
                    size={"3"}
                    fallback={'a'}
                    radius="full"
                    className="border-2 border-red-400 p-[2px] 
                    shadow-md hover:cursor-pointer"
                    />
                </div>
            </Popover.Trigger>
            <Popover.Content sideOffset={5} alignOffset={5}>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-bold">
                        {user.username}
                    </p>
                    <p className="text-md">
                        {user.email}
                    </p>
                </div>
            </Popover.Content>
        </Popover.Root>
    )
}