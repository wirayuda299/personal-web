
import Title from "../Title";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/images";
import { motion } from "framer-motion";

type Props = {
  projects: any[]
}
export default function Showcase({ projects }: Props) {
  return (
    <div className="w-full h-full relative" id="showcase">
      <div className="w-full h-full  text-white p-5 " id='showcase' data-scroll-section data-scroll >
        <Title text="Showcase" classNames="text-center py-20 capitalize" />
        <div className="w-full flex justify-between flex-col items-center">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 200 : -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`w-full max-w-6xl h-full flex-wrap lg:flex-nowrap justify-center p-8 flex gap-10 lg:gap-24 mb-6 items-center ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}

              key={project._id}>
              <Image
                src={urlFor(project.image).width(800).height(800).url()}
                width={1000}
                height={1000}
                priority
                className="w-[500px] h-[500px] object-cover object-center rounded-lg"
                alt="" />
              <div className="max-w-lg">
                <h1 className=" bg-gradient-to-r animate-text text-transparent from-teal-500 via-purple-500  to-[#030a6b] bg-clip-text text-4xl md:text-5xl lg:text-6xl font-bold pb-5">{project.title}</h1>
                <p className="text-xs sm:text-sm tracking-wider">
                  {project.description.length > 250 ? project.description.slice(0, 200) + '...' : project.description}
                </p>
                <div className="flex gap-2 mt-5 bg-black bg-opacity-50 px-7 py-3 rounded-lg w-32">
                  <a href={project.link}>
                    See Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


