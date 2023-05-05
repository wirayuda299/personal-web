import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import { useStateContext } from "@/components/context/StateContext";
import Showcase from "@/components/showcase/Showcase";
import dynamic from "next/dynamic";
import {useRef, useEffect } from "react";
const AboutSection = dynamic(() => import('@/components/About/About'))
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
type Responses = {
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string,
  _updatedAt: string,
  image: string
  subtext: string,
  title: string
}

type Props = {
  res: Responses[]
  projects: any[]
  profile: any[]
}

export default function Home({ res, projects, profile }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {selectedTab, setSelectedTab} = useStateContext()
  

  useEffect(() => {
    const element = document.getElementById(selectedTab.toLowerCase())
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }

  },[selectedTab])
  return (
    <div className="w-full h-full " data-scroll>
      <LocomotiveScrollProvider options={{
        smooth: true,
        lerp: 0.05,
        containerRef: scrollRef,
        watch: [],
      }}>
        <div className="w-full h-full "
          data-scroll
          data-scroll-container
          ref={scrollRef}>
          <section
            data-scroll-speed="4"
            data-scroll-section
            className="w-full h-screen">
            <Banner
              image={res[0].image}
              inView={false}
              subtext={res[0].subtext}
              title={res[0].title} />
          </section>
          <section

            data-scroll-speed="4"
            data-scroll-section
            className="w-full h-full">
            <AboutSection
              description={profile[0].description}
              name={profile[0].name}
              profile={profile[0].image} />

          </section>
          <section

            className="w-full h-full relative">
            <Showcase projects={projects} />

          </section>
          <section
            className="w-full h-full">
            <Contact />

          </section>

        </div>
      </LocomotiveScrollProvider>
    </div>
  );
}

export async function getStaticProps() {
  const { client } = await import('@/sanity/utils/client')
  const projects = await client.fetch(`*[_type == "projects"]`)
  const res = await client.fetch(`*[_type == "banner"]`)
  const profile = await client.fetch(`*[_type == "profile"]`)

  return {
    props: {
      res,
      projects,
      profile
    },
  };
}
