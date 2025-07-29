import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const greet = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    console.log("Synthetic Event:", event);
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Event Handling Examples</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => greet("Welcome")}>Say Welcome</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClick}>Click Me</button>
      </div>

      <CurrencyConverter />
    </div>
  );
}

export default App;
