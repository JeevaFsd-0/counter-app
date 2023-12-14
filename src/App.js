import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount( count + 1 );
  };

  const decrement = () => {
    setCount( count - 1 );
  };

  const reset = () => {
    setCount( 0 );
  };

  return (
    <div className="section">
      <div className="content">
        <h1>Count: {count}</h1>
        <button className="btn decBtn" onClick={decrement}> Decrement </button>
        <button className="btn resetBtn" onClick={reset}> Reset </button>
        <button className="btn incBtn" onClick={increment}> Increment </button>
      </div>
    </div>
  )
}

export default App;