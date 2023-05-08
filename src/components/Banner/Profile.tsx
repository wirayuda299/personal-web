import { urlFor } from "@/sanity/utils/images"
import Image from "next/image"
import TechStack from "../TechStack"
import { Props } from "."
import { motion } from "framer-motion"
export default function Profiles({ image, techstack }: Props) {
  return (
    <div

      className='relative  mx-auto flex justify-center w-full h-full order-1 lg:order-2 top-24 md:top-36'>
      <motion.div initial={{
        x: 500,
        opacity: 0,

      }}
        transition={{ duration: 1, delay: 0.5, easings: ['easeIn', 'easeInOut'] }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}>
        <Image
          priority
          sizes='(max-width: 640px) 100vw, 640px'
          width={500}
          height={500}
          alt='banner image'
          className='object-cover w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full'
          src={urlFor(image).url()}
        />
      </motion.div>

      <TechStack images={techstack} />
    </div>
  )
}
