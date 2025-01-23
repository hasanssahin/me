import { TypeAnimation } from "react-type-animation"
import { Button } from "@mui/material"
import FluidCursor from "../components/cursor/FluidCursor"
import cv from "../pdf/Hasan Sahin CV.pdf"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import HomeImage from "../images/bg-home.png"
export const HomePage = () => {
  const handleDownload = () => {
    const cvUrl = cv
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Hasan_Sahin_CV.pdf"
    link.click()
  }
  return (
    <div className='bg-custom-gradient flex justify-between items-center h-full sm:justify-center xl:justify-evenly'>
      <div className='w-[40%] justify-center items-center xs:hidden xl:flex'>
        <img className='w-[70%]' src={HomeImage} />
      </div>

      <div className='xl:w-[45%] flex flex-col justify-center items-start xs:w-full xl:m-0 lg:mx-40 md:mx-32 sm:mx-24 xs:mx-20'>
        <div className='mb-8'>
          <h1 className='text-5xl'>Hasan Şahin</h1>
          <TypeAnimation sequence={["I am a software engineer", 1000, "", 1000]} wrapper='span' speed={50} className='text-3xl' repeat={Infinity} />
        </div>
        <div className='flex flex-col gap-y-5'>
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
        <div className='w-full flex justify-end mt-5'>
          <Button startIcon={<CloudDownloadIcon />} size='small' variant='outlined' sx={{ textTransform: "none", color: "white", borderColor: "white" }} onClick={handleDownload}>
            Download CV
          </Button>
        </div>
      </div>
      {/* <FluidCursor /> */}
    </div>
  )
}
