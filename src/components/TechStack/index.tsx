import { urlFor } from "@/sanity/utils/images";
import { motion } from "framer-motion";
import Image from "next/image"
type Props = {
  images:string[]
}

export default function TechStack({ images }: Props) {
  
  return (
    <motion.div 
    initial={{ 
      opacity: 0,
    }}
    transition={{ duration: 1}}
    whileInView={{ 
      opacity: 1,
    }}

    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={urlFor(image).url()}
            width={300}
            height={300}
            priority
            alt={'techstack'}
            className={` w-14 h-14 absolute border top-[-22%] left-1/2 translate-x-1/2 translate-y-1/2 animate-rotation transition-all rounded-full origin-[0%_300%] bg-white sm:origin-[0%_350%] sm:top-[-27%] md:top-[-25%] lg:w-[100px] lg:h-[100px] lg:top-[-17%] lg:origin-[0%_300%] xl:top-[-15%]`}
            style={{ animationDelay: `${index * 2}s`}}
          />
        </div>
      ))}
    </motion.div>
  )
}
