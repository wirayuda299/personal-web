import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Inter } from 'next/font/google'

const openSans = Inter({
    display: 'swap',
    subsets: ['latin'],
})
export default function Layout({ children }: { children: ReactNode }) {
   
    return (
        <div className={`w-full h-screen overflow-hidden !select-none ${openSans.className}`} id="layout">
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <main className="w-full h-full overflow-y-auto overflow-x-hidden">
                <div className="App " id="smooth-wrapper">
                    <div id="smooth-content" >
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}