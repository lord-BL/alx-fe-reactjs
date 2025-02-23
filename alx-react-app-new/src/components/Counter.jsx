import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={counterStyle}>
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
