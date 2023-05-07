import { type ReactNode } from "react";
import Navbar from "../Navbar";
import { Roboto } from 'next/font/google'
const roboto = Roboto({
    display: 'swap',
    subsets: ['latin'],
    weight: "400",
})

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div
            className={`w-full h-full bg-black !select-none ${roboto.className}`}
            id="layout"
        >
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <main className="w-full h-full overflow-y-auto overflow-x-hidden" >{children}</main>
        </div>

    );
}
