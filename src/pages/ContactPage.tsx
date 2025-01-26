import { ContactForm } from "../components/ContactForm"
import Lottie from "lottie-react"
import emailAnimation from "../animations/email.json"
import { useEffect, useRef } from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

export const ContactPage = () => {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4)
    }
  }, [])

  return (
    <div className='bg-custom-bg bg-cover h-full pt-10 flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-4'>Get In Touch</h1>
      <p className='text-xl xs:w-[90%] lg:w-[60%] xl:w-[40%] mb-8 text-center px-4'>To contact me, you can reach out through LinkedIn, GitHub, or send me an email using the form below.</p>
      <div className='flex gap-6'>
        <a
          href='https://www.linkedin.com/in/hasan-şahin-547602286/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-[#007EBB] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity z-30'>
          <LinkedInIcon sx={{ fontSize: 28 }} />
          <span>LinkedIn</span>
        </a>
        <a
          href='https://github.com/hasanssahin'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 bg-[#333] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity z-30'>
          <GitHubIcon sx={{ fontSize: 28 }} />
          <span>GitHub</span>
        </a>
      </div>

      <div className='flex xl:flex-row xs:flex-col-reverse justify-evenly items-center xl:mt-7 xs:mt-10'>
        <div className='xl:w-[30%] xs:w-[50%]'>
          <Lottie lottieRef={lottieRef} animationData={emailAnimation} loop={true} />
        </div>
        <div className='xl:w-[40%] xs:w-[90%] md:w-[70%] p-8 bg-black/20 backdrop-blur-sm rounded-lg shadow-lg'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
