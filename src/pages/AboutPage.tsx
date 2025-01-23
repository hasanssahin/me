import "../css/AboutPage.css"

import { Slider } from "../components/swiper/Slider"
import { AboutTimeline } from "../components/about/AboutTimeline"
import { Divider, LinearProgress } from "@mui/material"

export const AboutPage = () => {
  return (
    <div className='about bg-custom-gradient'>
      <div className='about-me'>
        <div className='about-title'>About Me</div>
        <div className='about-description'>
          Hi, I'm Hasan Sahin, a software engineer with a passion for building efficient, scalable, and user-friendly applications. Since graduating from software engineering, I have embarked on a
          journey of exploring diverse technologies, continuously improving my skills, and solving real-world problems through innovative software solutions. With hands-on experience in back-end
          development using Spring Boot and front-end development using React, I specialize in building full-stack applications that are both functional and intuitive. My expertise extends to
          designing and implementing APIs (REST, SOAP, gRPC) and managing databases like PostgreSQL, MongoDB, and Redis. Additionally, I have a solid understanding of messaging tools such as RabbitMQ
          and Kafka, allowing me to develop robust, asynchronous communication systems that scale efficiently. What drives me most is the dynamic and ever-evolving nature of software engineering. I
          thrive on learning new technologies, tackling complex challenges, and creating solutions that add real value. Whether it's designing microservices, optimizing system performance, or
          collaborating on innovative projects, I approach every task with curiosity and dedication. Feel free to reach out—I'd love to connect and exchange ideas about building smarter, more
          effective software systems!
        </div>
      </div>

      <div className='skills'>
        <div className='divider'>My Skills</div>
        <div className='slider'>
          <Slider />
        </div>
      </div>
      <div className='linear'>
        <hr />
      </div>

      <div className='timelines'>
        <AboutTimeline />
      </div>
    </div>
  )
}
