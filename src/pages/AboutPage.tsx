import "../css/AboutPage.css"
import { Slider } from "../components/swiper/Slider"
import { AboutTimeline } from "../components/about/AboutTimeline"

export const AboutPage = () => {
  return (
    <div className='flex justify-center flex-col items-center bg-custom-gradient'>
      <div className='flex flex-col justify-center items-center w-[80%] mb-10'>
        <div className='text-[40px] font-bold mb-5'>About Me</div>
        <div className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci vero eaque animi hic nulla et consequuntur totam itaque temporibus? Porro facere laboriosam placeat dolorum,
          reprehenderit asperiores? Suscipit explicabo quo minus hic tenetur possimus necessitatibus rem, quas nesciunt, sequi eos repellat nihil itaque magnam incidunt autem in. Nostrum esse itaque
          vero delectus non rem, impedit modi? Numquam, quia atque! Assumenda rem odio incidunt officia quae illum mollitia aliquid sed eius tempore, dolores quaerat officiis nemo, temporibus
          explicabo quasi ipsam! Rem corporis praesentium illo suscipit sequi, accusamus repellat. Esse commodi ea, perferendis aliquid provident placeat suscipit optio alias autem iste ad!
        </div>
      </div>
      <div className='xs:w-[90%] lg:w-[70%]'>
        <div className='divider'>My Skills</div>
        <Slider />
      </div>
      <div className='mt-10'>
        <AboutTimeline />
      </div>
    </div>
  )
}
