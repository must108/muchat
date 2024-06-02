import Button from "./_components/Button";
import Tagline from "./_components/Tagline";

export default async function Home() {
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