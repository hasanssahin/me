import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { education, experience } from "../../data/about-data"
import { Divider } from "../divider/Divider"
export const AboutTimeline = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }
  return (
    <div className='flex justify-evenly items-start gap-x-12 xl:flex-row xs:flex-col xs:gap-y-20 xl:gap-y-0 mb-28'>
      <div className='xl:w-1/2 xs:w-full'>
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
      <div className='xl:w-1/2 xs:w-full'>
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
  )
}
