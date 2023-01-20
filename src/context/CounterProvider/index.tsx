import { createContext, ReactNode, useContext, useState } from "react";

type CounterProviderProps<T> = {
  children: T;
};

type CounterContextProps = {
  count: number;
  incrementCounter?(): void;
  decrementCounter?(): void;
};
const CounterContext = createContext({} as CounterContextProps);

function CounterProvider({ children }: CounterProviderProps<ReactNode>) {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }
  return (
    <CounterContext.Provider
      value={{ count, incrementCounter, decrementCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
}

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
