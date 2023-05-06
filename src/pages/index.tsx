import dynamic from "next/dynamic";
import { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
const AboutSection = dynamic(() => import('@/components/About/About'))
const Showcase = dynamic(() => import('@/components/showcase/Showcase'))
const Banner = dynamic(() => import('@/components/Banner/Banner'))
const Contact = dynamic(() => import('@/components/Contact/Contact'))

type Responses = {
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string,
  _updatedAt: string,
  image: string
  subtext: string,
  title: string
  background: string
  techstack: string[]
}

type Props = {
  res: Responses[]
  projects: any[]
  profile: any[]
}

export default function Home({ res, projects, profile }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  console.log(projects);
  

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
              techstack={res[0].techstack}
              image={res[0].image}
              />
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
