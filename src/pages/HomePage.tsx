import { TypeAnimation } from "react-type-animation"
import { Button } from "@mui/material"
import cv from "../pdf/Hasan Sahin CV.pdf"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import Me from "../images/me.png"
export const HomePage = () => {
  const handleDownload = () => {
    const cvUrl = cv
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Hasan_Sahin_CV.pdf"
    link.click()
  }
  return (
    <div className='bg-custom-bg bg-cover h-full flex xl:flex-row xs:flex-col items-center xl:justify-evenly xs:gap-y-16 xs:pb-16 xl:pb-0'>
      <div className='xs:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[35%] 2xl:w-[30%] flex justify-center items-center'>
        <img className='rounded-[50%] hover:shadow-[0_0_80px_10px_rgba(255,255,255,0.4)] transition-shadow duration-500 ease-in-out z-[999]' src={Me} />
      </div>

      <div className='xl:w-[45%] xs:w-[70%] flex flex-col justify-center items-start'>
        <div className='mb-8 xs:w-full xs:flex xs:flex-col xs:items-center xl:items-start'>
          <h1 className='text-5xl'>Hasan Şahin</h1>
          <TypeAnimation sequence={["I am a software engineer", 1000, "", 1000]} wrapper='span' speed={50} className='sm:text-3xl xs:text-2xl' repeat={Infinity} />
        </div>
        <div className='flex flex-col gap-y-5 xs:text-center xl:text-left'>
          <p>
            As a software engineering graduate with 1 year of professional experience, I have experience in developing web applications using Spring Boot and React. I am also familiar with API
            development (REST, SOAP, gRPC), database management (PostgreSQL, MongoDB, Redis) and messaging tools (RabbitMQ, Kafka).
          </p>
          <>
            I am committed to self-development and have worked on personal projects to deepen my understanding of modern technologies such as microservice architecture and scalable system design.
            Continuous learning and adapting to new challenges are my priorities as a software engineer.
          </>
          <p>
            I approach problems with an engineering mindset, focusing on innovation, growth and effective solutions. Feel free to connect to exchange ideas about software development and modern
            technologies.
          </p>
        </div>
        <div className='w-full flex xl:justify-end xs:justify-center mt-5'>
          <Button startIcon={<CloudDownloadIcon />} size='small' variant='outlined' sx={{ textTransform: "none", color: "white", borderColor: "white" }} onClick={handleDownload}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}

//
