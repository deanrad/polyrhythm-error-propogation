import React, { useRef } from "react";
import "./styles.css";
import { Listener } from './Listener'
import { trigger, query } from 'polyrhythm'

query(true /* all events */).subscribe(event => {
  const { type, payload } = event
  console.log(`${type}: ${JSON.stringify(payload)}`)
})

export default function App() {
  const clickCount = useRef(0)
  function increment() {
    trigger('user/incrementTo', clickCount.current+1)
    clickCount.current += 1
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={increment}>Increment</button>
      <ul className="grid-x grid-margin-x">
        
        <Listener max={5} throwOnNumber={2}/>
        <Listener max={5}  />
      </ul>
    </div>
  );
}
