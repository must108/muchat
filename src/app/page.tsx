import Button from "./_components/ui/Button";

export default async function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col items-center
            justify-center h-full w-full">
                <Button content="Get Started" />
                <h1>Hello World!</h1>
            </div>
        </>
    );
}