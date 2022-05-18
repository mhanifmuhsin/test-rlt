import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 5000);
    // clearing interval
    return () => clearInterval(timer);
  });
  return (
    <div className="App">
      <div>
        {(seconds === 1 && <div style={{ backgroundColor: "red" , height:'50px', width:'50px'}}>-</div>) ||
          (seconds === 2 &&  <div style={{ backgroundColor:"orange" , height:'50px', width:'50px'}}> -</div>) ||
          (seconds === 3 && <div style={{ backgroundColor:"green" , height:'50px', width:'50px'}}> -</div>)}
      </div>
    </div>
  );
}

export default App;
