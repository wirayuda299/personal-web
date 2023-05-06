import Image from 'next/image'
import { urlFor } from '@/sanity/utils/images'
import { motion } from 'framer-motion'
import TechStack from '../TechStack'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'

type Props = {
  image: string
  techstack: string[]
}
export default function Banner({ image, techstack }: Props) {
  
  return (
    <div
      className='w-full relative flex justify-center items-center lg:items-start h-full '
      id='home'
      data-scroll
      data-scroll-section
      style={{
        backgroundImage: `url(/solarSystem.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute text-white w-full flex justify-center'>
        <div className='mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 lg:gap-11 h-full justify-center '>
          <div className='w-full p-5 order-2 lg:order-1 sm:mt-10'>
            <motion.h1
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-5xl sm:text-6xl mt-32 transition-all ease duration-300 w-full md:text-7xl lg:text-[80px] font-extrabold `}>
              Hi, am <span className='animate-text bg-gradient-to-r text-transparent from-teal-500 via-purple-500  to-[#030a6b] bg-clip-text text-left uppercase'>Wira</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='md:text-2xl font-light max-w-sm w-full pt-4'>

              I am a passionate with front-end development and design. I love to create beautiful and responsive websites.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full flex space-x-4 mt-5">
              <a href="https://github.com/wirayuda299">
                <AiOutlineGithub className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/wira-yuda-0900b4243/">
                <AiFillLinkedin className="text-4xl" />
              </a>
              <button>
                <AiOutlineInstagram className="text-4xl" />
              </button>
            </motion.div>
          </div>
          <div className='relative  mx-auto flex justify-center w-full h-full order-1 lg:order-2 top-24 md:top-36'>
            <Image
              priority
              sizes='(max-width: 640px) 100vw, 640px'
              width={500}
              height={500}
              alt='banner image'
              className='object-cover w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full'
              src={urlFor(image).url()}
            />
            <TechStack images={techstack} />
          </div>

        </div>
      </div>
    </div>
  )
}
