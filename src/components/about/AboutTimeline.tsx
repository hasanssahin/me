import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { education, experience } from "../../data/about-data"
import AboutImage from "../../images/bg-about.png"
import "../../css/Timeline.css"
export const AboutTimeline = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }
  return (
    <div className='timeline'>
      <div className='education'>
        <div className='timeline-title'>Education</div>
        <Timeline position='alternate'>
          {education.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color='grey'>{item.date}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#02ae52" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='education-content' onClick={() => handleRedirect(item.url)} style={{ cursor: "pointer" }}>
                  <p>{item.location}</p>
                  <p className='education-color'>{item.school}</p>
                  <p>{item.department}</p>
                  <p>{item.title}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      <div className='experience'>
        <div className='timeline-title'>Experience</div>
        <Timeline position='alternate'>
          {experience.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color='grey'>{item.date}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#19c7d5" }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='experience-content' onClick={() => handleRedirect(item.url)} style={{ cursor: "pointer" }}>
                  <p>{item.location}</p>
                  <p className='experience-color'>{item.company}</p>
                  <p>{item.title}</p>
                  <p>{item.position}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      {/* <div className='about-image'>
        <img src={AboutImage} />
      </div> */}
    </div>
  )
}
