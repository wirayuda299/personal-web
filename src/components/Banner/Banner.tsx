import { AiOutlineArrowDown } from 'react-icons/ai'
import Image from 'next/image'
import { urlFor } from '@/sanity/utils/images'
import Title from '../Title'
import { gsap } from 'gsap'
import { handleClickScroll } from '@/helper/scrollIntoview'

type Props = {
  image: string
  title: string
  subtext: string
  inView: boolean
}
export default function Banner({ image, inView, subtext, title }: Props) {
  
  return (
    <div className='w-full relative  flex justify-center place-items-center h-screen ' id='home'>
      <Image
        fill
        priority
        sizes='100vw'
        alt='banner image'
        className='object-cover w-full h-screen banner-image'
        src={urlFor(image).url() || ''}
      />
      <div className='absolute w-full h-screen bg-black bg-opacity-50' />
      <div className='absolute text-white w-full mx-auto text-center'>
        <Title text={title} />
        <p className='text-sm md:text-xl font-bold mt-3 animate-text bg-gradient-to-r text-transparent from-teal-600 via-purple-500  to-[#030a6b] bg-clip-text '>{subtext}</p>
        <button className='absolute -bottom-56 md:-bottom-72 left-1/2 transform -translate-x-1/2 mb-10'>
          <AiOutlineArrowDown
            onClick={() => handleClickScroll('about')}
            className={`animate-bounce text-5xl text-white ${inView ? 'opacity-0' : 'opacity-100'}`}
          />
        </button>
      </div>
    </div>
  )
}
