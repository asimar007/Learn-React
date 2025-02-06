import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(5);
  return (
    <CounterContext.Provider value={{ counter, setCounter, name: "Asim" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
