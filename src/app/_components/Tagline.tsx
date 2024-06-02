import Button from "./Button";
import Link from "next/link";

export default function Tagline() {
    return (
        <div className="flex flex-col
        justify-center items-center h-full">
            <h1 className="text-8xl
            text-white font-bold
            mb-1"
            >
                Get connected.
            </h1>
            <h1 className="text-8xl
            text-white font-bold
            mb-7"
            >
                Join the conversation.
            </h1>
            <Link href="/sign-up">
                <Button content="Get Started" />
            </Link>
        </div>
    );
}