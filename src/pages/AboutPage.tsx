import { Slider } from "../components/swiper/Slider"
import { AboutTimeline } from "../components/about/AboutTimeline"
// import CanvasCursor from "../components/cursor/CanvasCursor"
import { Divider } from "../components/divider/Divider"
import AboutMe from "../images/about-me.png"
export const AboutPage = () => {
  return (
    // sayfa geneli
    <div className='bg-custom-bg bg-cover h-full flex justify-center flex-col items-center'>
      {/*başlık, (resim, yazı)  */}
      <div className='flex flex-col justify-center items-center xs:w-[90%] xl:w-[85%] mb-20'>
        {/* başlık */}
        <div className='text-[40px] font-bold mb-5'>About Me</div>
        {/* resim ve yazı */}
        <div className='flex justify-evenly items-center xs:flex-col xl:flex-row xs:gap-y-10 xl:gap-y-0'>
          <div className='2xl:w-[25%] xl:w-[30%] lg:w-[30%] md:w-[35%] xs:w-[50%]'>
            <img className='rounded-[40px]' src={AboutMe} />
          </div>
          <div className='2xl:w-[55%] xl:w-[60%] xs:w-[90%] flex flex-col justify-center items-start gap-y-5 xs:text-center xl:text-left'>
            <p>
              My name is Hasan Şahin, and I am 24 years old. My software journey began at the age of 15 when I studied Database Programming in a technical high school. This early start gave me a
              strong foundation in understanding how systems store and manage data, sparking my passion for software development.
            </p>
            <p>
              During my undergraduate years in software engineering, I explored various areas of software development, which helped me discover my enthusiasm for building efficient and user-friendly
              applications. Over the past year, I have been professionally developing web applications using Spring Boot and React, focusing on both frontend and backend development.
            </p>
            <p>
              My approach to problem-solving is rooted in an engineering mindset, focusing on innovation, growth, and effective solutions. I am deeply committed to continuous learning and
              self-development, frequently working on personal projects to deepen my expertise.
            </p>
            <p>If you'd like to connect, collaborate, or exchange ideas about software development and modern technologies, feel free to reach out!</p>
          </div>
        </div>
      </div>
      {/* skill */}
      <div className='xs:w-[90%] lg:w-[70%]'>
        <Divider text='My Skills' className='text-[#d3e8db]' />
        <Slider />
      </div>
      {/* timeline */}
      <div className='mt-20'>
        <AboutTimeline />
      </div>
    </div>
  )
}
