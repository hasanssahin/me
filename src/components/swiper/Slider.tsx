import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import { useEffect, useState } from "react"
import { SkillType } from "../../types/types"
import { toast } from "react-toastify"
import supabase from "../../services/supabase"
export const Slider = () => {
  const [skills, setSkills] = useState<SkillType[]>([])

  useEffect(() => {
    getSkills()
  }, [])

  async function getSkills() {
    try {
      const { data } = await supabase.from("skills").select("*")
      if (data) setSkills(data)
    } catch (error) {
      toast.error("An error occurred while fetching skills")
    }
  }

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
