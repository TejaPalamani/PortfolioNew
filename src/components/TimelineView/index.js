import React, {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderTimelineItems = () => {
    const {timelineItemsList} = this.props

    return timelineItemsList.map(item => {
      if (item.courseTitle !== undefined) {
        return <CourseTimelineCard courseDetails={item} key={item.id} />
      }
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    })
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="main">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: 'blue',
              secondary: 'white',
              cardBgColor: 'white',
              cardForeColor: 'violet',
              titleColor: 'black',
            }}
          >
            {this.renderTimelineItems()}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
