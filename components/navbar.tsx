import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Navbar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="border-b border-gray-200">
            <div className="flex justify-between items-center max-auto h-16 px-4 sm:px-8">
                <Link href="/" className="flex items-center">Home</Link>
                <div className="flex items-center gap-4">
                    <Link href="/sign-in" className={buttonVariants()}>Sign In</Link>
                    {/* <Link href="/auth/sign-up">Sign Up</Link> */}
                </div>
            </div>
        </div >
    )
}