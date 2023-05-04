import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Inter } from 'next/font/google'
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";

const openSans = Inter({
    display: 'swap',
    subsets: ['latin'],
})
export default function Layout({ children }: { children: ReactNode }) {
    const [inView, setInView] = useState(false);
    const el = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(el);
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    useLayoutEffect(() => {
      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true,
        ease: "power3",
        content: q("#smooth-content"),
        smoothTouch: true,
        speed: 1,
        wrapper: q("#smooth-wrapper"),
      });
  
      return () => {
        smoother.kill();
      };
    }, [q]);
    return (
        <div className={`w-full h-screen overflow-y-auto !select-none ${openSans.className}`} id="layout">
            <div className="fixed top-0 z-50 w-full">
                <Navbar />
            </div>
            <main className="w-full h-screen overflow-y-scroll">
                <div className="App " ref={el} id="smooth-wrapper">
                    <div id="smooth-content" >
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}