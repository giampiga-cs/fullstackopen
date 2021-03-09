//unicafe step 1, 1.6

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text}
                              {props.value
                        }</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = newValue => {
    setGood(newValue);
    console.log("x");
  }

  const incNeutral = newValue => {
    setNeutral(newValue);
  }

  const incBad = newValue => {
    setBad(newValue);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => incGood(good + 1)} text="good" />
      <Button handleClick={() => incNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => incBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display text="good " value={good} />
      <Display text="neutral " value={neutral} />
      <Display text="bad " value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)