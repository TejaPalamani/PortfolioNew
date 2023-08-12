import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    id,
    categoryId,
    courseTitle,
    description,
    tagsList,
    duration,
  } = courseDetails
  console.log(courseDetails)

  return (
    <div>
      <div className="horizontal">
        <h1 className="h1">{courseTitle}</h1>
        <div className="horizontal">
          <AiFillClockCircle />
          <p>10 days</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
