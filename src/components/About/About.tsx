import Image from "next/image";
import profile from '../../../public/man.jpg'
import Title from "../Title";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
export default function About() {
  return (
    <div className="w-full h-full text-white p-5 " id='about' style={{
      backgroundImage: `url(/bg.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }}>
      <Title text="About Me" classNames="py-14 capitalize text-center"/>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 md:grid-cols-2 justify-between items-center ">
        <Image
          className="object-cover about-image w-full h-auto rounded-lg aspect-square"
          src={profile}
          width={800}
          height={800}
          loading="lazy"
          placeholder="blur"
          blurDataURL={profile.blurDataURL}
          alt="" />
        <div className="flex flex-col items-start">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-bold py-8">
           Hi, I&apos;m <span className="from-teal-500 via-purple-500  to-[#030a6b] bg-clip-text bg-gradient-to-l text-transparent">Wira Yuda</span>
          </h1>
          <p className="text-xs sm:text-base text-gray-400 tracking-wider">
          "Welcome to my website! My name is Wira, and I'm a 22-year-old self-taught web developer based in Bali, Indonesia. I first started learning web development during the Covid-19 pandemic, and since then, I've become passionate about front-end development. Through my journey, I've learned how to create beautiful, responsive websites using HTML, CSS, and JavaScript. On this site, I'll be sharing my latest projects and insights into my development process. Thanks for stopping by, and I hope you enjoy exploring my work!"   
          </p>
          <div className="w-full flex space-x-4 mt-5">
            <a href="https://github.com/wirayuda299">
              <AiOutlineGithub className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/wira-yuda-0900b4243/">
              <AiFillLinkedin className="text-4xl" />
            </a>
            <button>
              <AiOutlineInstagram className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
