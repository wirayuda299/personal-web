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
    <div className="w-full h-full relative">

      <div className="w-full h-full  text-white p-5 " id='showcase' data-scroll-section data-scroll >
        <Title text="Showcase" classNames="text-center py-20 capitalize" />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
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
            <SwiperSlide
              key={project._id}
              className="bg-center bg-cover relative h-[500px] !w-[250px] sm:!w-[500px] md:!w-[600px] lg:!w-[800px] " >
              <a
                target='_blank'
                rel='noopener noreferrer'
                title="click to see the preview"
                href={project.link}>
                <Image
                  sizes='500px'
                  width={500}
                  height={500}
                  priority
                  alt={project.title}
                  className='object-cover mx-auto w-full '
                  src={urlFor(project.image).url() || ''} />
              </a>
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}


