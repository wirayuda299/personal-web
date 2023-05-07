import { motion } from "framer-motion";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import {Roboto_Condensed} from 'next/font/google'
const font = Roboto_Condensed({
  display: 'swap',
  subsets: ['latin-ext'],
  weight: "700",
  style: "normal",  
})

export default function BannerTitle() {
  return (
    <div className='w-full p-5 order-2 lg:order-1 sm:mt-10'>
    <motion.h1
     initial={{ opacity: 0, y: 300 }}
     transition={{ duration: 1 }}
     whileInView={{ opacity: 1, y: 0 }}

      className={`text-5xl sm:text-6xl mt-32 w-full md:text-7xl lg:text-[80px] font-extrabold animate-text bg-gradient-to-r text-transparent from-[#feeba9] via-[#aaa484]   to-[#212e3e] bg-clip-text ${font.className} `}>
      Hi, am <span className=' text-left uppercase'>Wira</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-sm sm:text-base md:text-lg font-light max-w-sm w-full pt-4 text-gray-400 `}>

      I am a passionate with front-end development and design. I love to create beautiful and responsive websites.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-full flex space-x-4 mt-5">
      <a href="https://github.com/wirayuda299">
        <AiOutlineGithub className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/wira-yuda-0900b4243/">
        <AiFillLinkedin className="text-2xl" />
      </a>
      <button>
        <AiOutlineInstagram className="text-2xl" />
      </button>
    </motion.div>
  </div>
  )
}
