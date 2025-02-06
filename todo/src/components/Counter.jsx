import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let [val, setVal] = useState("");
  if (count % 2 === 0) {
    val = "even";
  } else {
    val = "Odd";
  }

  return (
    <div>
      <h6>The Number is={val}</h6>
      <p>The Count is={count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;
