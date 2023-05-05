import { type ReactNode } from "react";
import Navbar from "../Navbar";
import { Inter } from 'next/font/google'
const inter = Inter({
    display: 'swap',
    subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div
            className={`w-full h-full !select-none ${inter.className}`}
            id="layout"
            style={{
                backgroundImage: 'url(/earth.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
               
            }}
        >
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <main className="w-full h-full overflow-y-auto">{children}</main>
        </div>

    );
}
