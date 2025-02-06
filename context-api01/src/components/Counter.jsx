import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          counterContext.setCounter(counterContext.counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          counterContext.setCounter(counterContext.counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
