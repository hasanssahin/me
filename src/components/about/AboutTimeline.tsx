import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { Divider } from "../divider/Divider"
import supabase from "../../services/supabase"
import { useEffect, useState } from "react"
import { EducationType, ExperienceType } from "../../types/types"
import { toast } from "react-toastify"
import Lottie from "lottie-react"
import educationAnimation from "../../animations/education.json"
import experienceAnimation from "../../animations/experience.json"
export const AboutTimeline = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }
  const [experience, setExperience] = useState<ExperienceType[]>([])
  const [education, setEducation] = useState<EducationType[]>([])
  useEffect(() => {
    getExperience()
    getEducation()
  }, [])

  async function getExperience() {
    try {
      const { data } = await supabase.from("experiences").select("*")
      if (data) {
        setExperience(data)
      }
    } catch (error) {
      toast.error("Failed to fetch experience data")
    }
  }

  async function getEducation() {
    try {
      const { data } = await supabase.from("educations").select("*")
      if (data) {
        setEducation(data)
      }
    } catch (error) {
      toast.error("Failed to fetch education data")
    }
  }

  return (
    <div className='flex justify-evenly items-start gap-x-12 xl:flex-row xs:flex-col xs:gap-y-20 xl:gap-y-0 mb-28'>
      {/* Experience Section */}
      <div className='xl:w-1/2 xs:w-full flex flex-col justify-start items-center'>
        <div className='w-full flex justify-center items-center h-[200px] mb-4'>
          <div className='w-[300px]'>
            <Lottie animationData={experienceAnimation} loop={true} />
          </div>
        </div>
        <div className='w-full'>
          <Divider text='Experience' className='text-[#e0f57a]' />
          <Timeline position='alternate'>
            {experience.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color='grey'>{item.date}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: "#e0f57a" }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div onClick={() => handleRedirect(item.url)} style={{ cursor: "pointer" }}>
                    <p>{item.location}</p>
                    <p className='text-[#e0f57a]'>{item.company}</p>
                    <p>{item.title}</p>
                    <p>{item.position}</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>

      {/* Education Section */}
      <div className='xl:w-1/2 xs:w-full flex flex-col justify-start items-center'>
        <div className='w-full flex justify-center items-center h-[200px] mb-4'>
          <div className='w-[200px]'>
            <Lottie animationData={educationAnimation} loop={true} />
          </div>
        </div>
        <div className='w-full'>
          <Divider text='Education' className='text-[#7a9ff5]' />
          <Timeline position='alternate'>
            {education.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color='grey'>{item.date}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: "#7a9ff5" }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div onClick={() => handleRedirect(item.url)} style={{ cursor: "pointer" }}>
                    <p>{item.location}</p>
                    <p className='text-[#7a9ff5]'>{item.school}</p>
                    <p>{item.department}</p>
                    <p>{item.title}</p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}
