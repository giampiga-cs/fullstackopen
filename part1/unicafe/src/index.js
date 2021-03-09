//unicafe step 5, 1.10

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// Same
const Statistic = (props) => {
  if (props.value === 0)
    return ( <p>No feedback given.</p> )
  else
    return (
      <>
        <tr>
         <td>{props.text}</td>
         <td>{props.value}</td>
        </tr>
      </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Showed how to do it with a Statistics component

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={(good - bad) / (good + neutral + bad)} />
      <Statistic text="positive" value={good / (good + neutral + bad)} /> <>%</>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
