import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Showcase from "@/components/showcase/Showcase";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const AboutSection = dynamic(() => import('@/components/About/About'))

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

type Props ={
  res: Responses[]
  projects: any[]
}

export default function App({ res, projects }: Props) {
  let animationFramdeid:any = null
  const duration= 2000
  const easing = easeInOutQuad

  function easeInOutQuad(t: number) {
    return 1 - Math.pow(1 - t, 4)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  function handleScroll() {
    if(animationFramdeid) {
      window.cancelAnimationFrame(animationFramdeid)
    }
    animationFramdeid = window.requestAnimationFrame(updateScrollPosition)
  }

  function updateScrollPosition() {
    const currentScrollPosition = window.scrollY
    const targetScrollPosition = currentScrollPosition + currentScrollPosition / 2
    const distance = targetScrollPosition - currentScrollPosition
    const timeStart = performance.now()

    function animationFunction() {
      const elapseTime = performance.now() - timeStart
      const progress = Math.min(elapseTime / duration, 1)
      const newScrollPosition = currentScrollPosition + distance * easing(progress)
      window.scrollTo(0, newScrollPosition)

      if(progress < 1) {
        animationFramdeid = window.requestAnimationFrame(animationFunction)
      } else {
        animationFramdeid = null
      }
    }
    animationFramdeid = window.requestAnimationFrame(animationFunction)

  }
  
  
  return (
   <div className="w-full h-full ">
      <Banner image={res[0].image} inView={false}  subtext={res[0].subtext} title={res[0].title}/>
      <AboutSection />
      <Showcase projects={projects} />
      <Contact/>
   </div>
  );
}

export async function getStaticProps() {
  const {client} = await import('@/sanity/utils/client')
  const projects = await client.fetch(`*[_type == "projects"]`)
  const res = await client.fetch(`*[_type == "banner"]`)

  return {
    props: {
      res,
      projects
    },
  };
}
