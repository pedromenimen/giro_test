import { createContext, ReactNode, useContext, useState } from 'react';

interface SimulationContextProps {
  children: ReactNode;
}

interface SimulationContextType {
  value: number;
  setValue: (newState: number) => void;
  time: number;
  setTime: (newState: number) => void;
}

const initialValue = {
  value: 0,
  setValue: () => {},
  time: 0,
  setTime: () => {},
};

export const SimulationContext =
  createContext<SimulationContextType>(initialValue);
export const SimulationProvider = ({ children }: SimulationContextProps) => {
  const [value, setValue] = useState(initialValue.value);
  const [time, setTime] = useState(initialValue.time);
  return (
    <SimulationContext.Provider value={{ value, setValue, time, setTime }}>
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => useContext(SimulationContext);
