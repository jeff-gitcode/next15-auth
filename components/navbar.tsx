import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
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