import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  console.log(projectDetails)
  return (
    <div>
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="horizontal">
        <h1>{projectTitle}</h1>
        <div className="horizontal">
          <AiFillCalendar />
          <p>1hr</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
