import { Card } from "@radix-ui/themes";
import Button from "../_components/Button";

export default function Page() {
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
                    <form action="">
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
                            <input type="password"
                            name="password"
                            placeholder="Enter a password"
                            className="text-white rounded-md
                            bg-transparent border border-[#2c2f33]
                            p-1 outline-none"
                            required
                             />
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