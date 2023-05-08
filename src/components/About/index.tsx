import Image from "next/image";
import { motion } from 'framer-motion'
import { urlFor } from "@/sanity/utils/images";
import dynamic from "next/dynamic";
const Title = dynamic(() => import('../Title'))
const Info = dynamic(() => import('./Info'))

export type Props = {
  name: string
  profile: string
  description: string
}
export default function About({ name, profile, description }: Props) {

  return (

    <div className="w-full h-full text-white p-5  " id='about' data-scroll >
      <Title text="About Me" classNames="py-14 capitalize text-center" />
      <div className="container mx-auto relative h-full grid grid-cols-1 gap-x-10 md:grid-cols-2 justify-between items-center ">
        <motion.div
          className="w-full h-full relative"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src={urlFor(profile).width(800).height(800).url()}
            width={1000}
            height={1000}
            priority
            className="w-[500px] h-[500px] object-cover object-center rounded-lg"
            alt="" />
        </motion.div>
        <Info description={description} name={name} profile={profile} />
      </div>
    </div>

  )
}
