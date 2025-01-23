import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import "swiper/css"
import "swiper/css/effect-coverflow"

import "../../css/Slider.css"

import HTML from "../../images/html.png"
import CSS from "../../images/css.png"
import Javascript from "../../images/javascript.png"
import Java from "../../images/java.png"
import Reactjs from "../../images/react.png"
import SpringBoot from "../../images/spring-boot.png"
import MongoDB from "../../images/mongodb.png"
import PostgreSQL from "../../images/postgresql.png"
import Redis from "../../images/redis.png"

export const Slider = () => {
  return (
    <div className='slider-container'>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{ rotate: 0, stretch: -50, depth: 250, modifier: 3.5, slideShadows: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        modules={[EffectCoverflow, Navigation]}>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>Java</div>
            <img className='skill-img' src={Java} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>Spring Boot</div>
            <img className='skill-img' src={SpringBoot} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>Javascript</div>
            <img className='skill-img' src={Javascript} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>React</div>
            <img className='skill-img' src={Reactjs} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>HTML</div>
            <img className='skill-img' src={HTML} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>CSS</div>
            <img className='skill-img' src={CSS} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>PostgreSQL</div>
            <img className='skill-img' src={PostgreSQL} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>MongoDB</div>
            <img className='skill-img' src={MongoDB} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='skill'>
            <div className='skill-title'>Redis</div>
            <img className='skill-img' src={Redis} />
          </div>
        </SwiperSlide>
        <div className='slider-nav'>
          <div className='swiper-button-prev'>
            <ArrowLeft size={20} />
          </div>
          <div className='swiper-button-next'>
            <ArrowRight size={20} />
          </div>
        </div>
      </Swiper>
    </div>
  )
}
