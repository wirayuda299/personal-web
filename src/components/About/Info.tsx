import { motion } from "framer-motion";
import { Props } from ".";

export default function Info({description, name, profile}:Props) {
  return (
    <div className="flex flex-col items-start">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}

        className=" text-4xl sm:text-5xl lg:text-6xl font-bold py-8">
        Hi, I&apos;m <span className=" animate-text  from-[#feeba9] via-[#aaa484]   to-[#212e3e] bg-clip-text bg-gradient-to-l text-transparent">{name}</span>
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
  )
}
