// Course information, step3
// Exercise 1.3

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {

  return (
    <div> 
    <Part part={props.part.name} exercises={props.part.exercises} />
    <Part part={props.part1.name} exercises={props.part1.exercises} />
    <Part part={props.part2.name} exercises={props.part2.exercises} />
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

    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }

    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }

    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Header course={course} />
      <Content part={part1} part1={part2} part2={part3}/>
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))