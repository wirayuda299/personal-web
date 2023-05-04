import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { urlFor } from "@/sanity/utils/images";

type Props = {
  projects: any[]
}
export default function Showcase({ projects }: Props) {
  return (
    <div className="w-full h-full p-5 bg-black" id='showcase' style={{
      backgroundImage: `url(/bg3.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

    }}>
      <Title text="Showcase" classNames="text-center py-20 capitalize" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-14"
      >
        {projects.map((project: any) => (
          <SwiperSlide key={project._id} className="bg-center bg-cover !w-[250px] sm:!w-[500px] md:!w-[600px] lg:!w-[800px] " >
            <Image 
              sizes='500px'
              width={500}
              height={500}
              priority
              alt={project.title}
              className='object-cover mx-auto w-full '
              src={urlFor(project.image).url() || ''} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


