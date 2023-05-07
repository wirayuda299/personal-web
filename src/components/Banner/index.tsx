import BannerTitle from './BannerTitle'
import Profiles from './Profile'

export type Props = {
  image: string
  techstack: string[]
}
export default function Banner({ image, techstack }: Props) {

  return (
      <div
        className='w-full relative flex justify-center items-center lg:items-start h-screen '
        id='home'
        data-scroll
        data-scroll-section

      >
        <div className='absolute text-white w-full h-full flex justify-center'>
          <div className='mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 lg:gap-11 h-full justify-center items-center '>
            <BannerTitle />
            <Profiles image={image} techstack={techstack} />
          </div>
        </div>
      </div>

  )
}
