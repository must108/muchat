import { Card } from "@radix-ui/themes";
import Text from "../_components/Text";

export default function Page() {
    return ( 
        <div className="absolute h-full w-full overflow-scroll
        bg-bgblack text-white">
            <div className="flex flex-1 h-full items-center
            justify-center">
                <Card variant={"classic"}>
                    <form action="">
                        <div className="mb-5 flex flex-col justify-center
                        items-center">
                            <Text content="Username" 
                            style="font-bold text-xl" />
                            <input type="text"
                            name="username"
                            placeholder="Enter a username"
                            className="text-black"
                            required
                             />
                        </div>
                        <div className="mb-5 flex flex-col justify-center
                        items-center">
                            <Text content="Password" 
                            style="font-bold text-xl" />
                            <input type="password"
                            name="password"
                            placeholder="Enter a password"
                            className="text-black"
                            required
                             />
                        </div>
                        <div className="mb-5 flex flex-col justify-center
                        items-center">
                            <Text content="Email" 
                            style="font-bold text-xl" />
                            <input type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                             />
                        </div>
                        <div>

                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}