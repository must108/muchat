
import {
    Card
} from "@radix-ui/themes";
import Button, { UnderlineButton } from "./Button";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed z-50 flex w-full select-none p-4">
            <Card className="w-full pl-4" variant={"surface"}>
                <div className="flex justify-between">
                    <Link href="/">
                        <h1 className="font-bold
                        text-white text-3xl"
                        >
                            muChat
                        </h1>
                    </Link>
                    <div className="flex flex-row 
                    items-center justify-center gap-2
                    text-white">
                        <Link href="sign-in">
                            <UnderlineButton content="Sign In" />
                        </Link>
                        <Link href="sign-up">
                            <Button content="Get Started" />
                        </Link>
                    </div>
                </div>
            </Card>
        </nav>
    );
}