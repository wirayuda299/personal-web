import Image from "next/image";
import Title from "../Title";
import { motion } from 'framer-motion'
import { urlFor } from "@/sanity/utils/images";
type Props = {
  name:string
  profile:string
  description:string
}
export default function About({ name, profile, description }: Props) {

  return (
    <div className="w-full h-full text-white p-5  " id='about' >
      <Title text="About Me" classNames="py-14 capitalize text-center" />
      <div className="container mx-auto grid grid-cols-1 gap-x-10 md:grid-cols-2 justify-between items-center ">
        <motion.div
          className="w-full h-full relative"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            className="object-cover about-image w-full h-auto rounded-lg aspect-square"
            src={urlFor(profile).url().toString()}
            width={800}
            height={800}
            priority
            alt={name} />
           <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
        <div className="flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}

            className=" text-4xl sm:text-5xl lg:text-6xl font-bold py-8">
            Hi, I&apos;m <span className="from-teal-500 via-purple-500 animate-text  to-[#030a6b] bg-clip-text bg-gradient-to-l text-transparent">{name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs sm:text-base text-gray-400 tracking-wider">
          {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
           className="w-full flex space-x-4 mt-5">
           <button className="bg-black bg-opacity-50 rounded-lg px-8 py-3">
            Download CV
           </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
