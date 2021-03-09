//unicafe step 6, 1.11

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Did with Statistic component and HTML
const Statistic = ( {text, value} ) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ( {good, neutral, bad} ) => {
  const all = good + neutral + bad
  let average = 0
  let positive = 0

  if (all !== 0) {
    average = (good - bad) / all
    positive = good / all
    return (
      <>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </>
    )  
  }
  return <p>No feedback given!</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Showed how to do it with Statistics component
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
