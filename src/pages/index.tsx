import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Showcase from "@/components/showcase/Showcase";
import dynamic from "next/dynamic";
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
  console.log(projects);
  
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
