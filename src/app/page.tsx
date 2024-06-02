import Button from "./_components/Button";
import Card from "./_components/Card";

export default async function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col items-center
            justify-center h-full w-full"
            style={{
                backgroundImage: `url(/gradient.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <Button content="Get Started" />
                <Card />
            </div>
        </>
    );
}