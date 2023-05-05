import Image from "next/image";
import profile from '../../../public/man.jpg'
import Title from "../Title";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { useEffect } from "react";
import { motion } from 'framer-motion'
export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('bg-position-center')
      } else {
        entries[0].target.classList.remove('bg-position-center')
      }
    })
    const about = document.querySelector('#about')
    about && observer.observe(about)
  }, [])

  return (
    <div className="w-full min-h-screen h-full text-white p-5 bg-fixed " id='about' style={{
      backgroundImage: `url(/bg.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',

    }}>
      <Title text="About Me" classNames="py-14 capitalize text-center" />
      <div className="container mx-auto grid grid-cols-1 gap-x-10 md:grid-cols-2 justify-between items-center ">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            className="object-cover about-image w-full h-auto rounded-lg aspect-square"
            src={profile}
            width={800}
            height={800}
            loading="lazy"
            placeholder="blur"
            blurDataURL={profile.blurDataURL}
            alt="" />
        </motion.div>
        <div className="flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}

            className=" text-4xl sm:text-5xl lg:text-6xl font-bold py-8">
            Hi, I&apos;m <span className="from-teal-500 via-purple-500 animate-text  to-[#030a6b] bg-clip-text bg-gradient-to-l text-transparent">Wira Yuda</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs sm:text-base text-gray-400 tracking-wider">
            "Welcome to my website! My name is Wira, and I'm a 22-year-old self-taught web developer based in Bali, Indonesia. I first started learning web development during the Covid-19 pandemic, and since then, I've become passionate about front-end development. Through my journey, I've learned how to create beautiful, responsive websites using HTML, CSS, and JavaScript. On this site, I'll be sharing my latest projects and insights into my development process. Thanks for stopping by, and I hope you enjoy exploring my work!"
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
      </div>
    </div>
  )
}
