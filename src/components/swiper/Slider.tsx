import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import "swiper/css"
import "swiper/css/effect-coverflow"

import HTML from "../../images/html.png"
import CSS from "../../images/css.png"
import Javascript from "../../images/javascript.png"
import Java from "../../images/java.png"
import Reactjs from "../../images/react.png"
import SpringBoot from "../../images/spring-boot.png"
import MongoDB from "../../images/mongodb.png"
import PostgreSQL from "../../images/postgresql.png"
import Redis from "../../images/redis.png"

const skills = [
  { name: "Java", url: Java },
  { name: "Spring Boot", url: SpringBoot },
  { name: "Javascript", url: Javascript },
  { name: "React", url: Reactjs },
  { name: "HTML", url: HTML },
  { name: "CSS", url: CSS },
  { name: "PostgreSQL", url: PostgreSQL },
  { name: "MongoDB", url: MongoDB },
  { name: "Redis", url: Redis },
]

export const Slider = () => {
  return (
    <Swiper
      effect='coverflow'
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      coverflowEffect={{ rotate: 0, stretch: -75, depth: 250, modifier: 3.5, slideShadows: false }}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      modules={[EffectCoverflow, Navigation]}>
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col justify-center items-center gap-y-5'>
            <div className='lg:text-lg xs:text-sm font-bold'>{skill.name}</div>
            <img className='md:h-[200px] xs:h-[150px] object-contain' src={skill.url} />
          </div>
        </SwiperSlide>
      ))}
      <div className='flex justify-center items-center gap-x-5 mt-10'>
        <div className='swiper-button-prev'>
          <ArrowLeft size={20} />
        </div>
        <div className='swiper-button-next'>
          <ArrowRight size={20} />
        </div>
      </div>
    </Swiper>
  )
}
