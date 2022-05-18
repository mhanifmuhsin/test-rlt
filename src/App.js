import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 3) {
        setSeconds(1);
      } else {
        setSeconds(seconds + 1);
      }
    }, 5000);
    return () => clearInterval(timer);
  });
  return (
    <div className="App">
      <div>
        <div
          style={{
            backgroundColor: seconds === 3 ? "green" : "white",
            height: "50px",
            width: "50px",
            border: "1px solid gray",
          }}
        ></div>
        <div
          style={{
            backgroundColor: seconds === 2 ? "orange" : "white",
            height: "50px",
            width: "50px",
            border: "1px solid gray",
          }}
        ></div>
          <div
            style={{
              backgroundColor: seconds === 1 ? "red" : "white",
              height: "50px",
              width: "50px",
              border: "1px solid gray",
            }}
          ></div>
      </div>
    </div>
  );
}

export default App;
