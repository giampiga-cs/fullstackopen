import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    return (
      <>
        <Header name={course.name}/>
        <Content parts={course.parts} />
        <b>total of {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} exercises</b>
      </>
    )
}

export default Course