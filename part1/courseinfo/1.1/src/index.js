// Course information, step1
// Exercise 1.1

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props, props1, props2) => {

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1}  part1={part2} exercises1={exercises2} part2={part3}  exercises2={exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))