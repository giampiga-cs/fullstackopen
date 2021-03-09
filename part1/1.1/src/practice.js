import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  console.log("Creating Peter yo! Shit's finna be crazy.")
  const name = "Peter"
  const age = 20
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Giampiero" age={26 + 100}/>
      <Hello name={name} age={age} />
      <p>Have a nice day!</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))