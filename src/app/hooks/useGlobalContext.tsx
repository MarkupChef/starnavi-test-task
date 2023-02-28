import React, { createContext, SetStateAction, useState } from 'react';

interface UseGlobalContext {
  started: number;
  setStarted: React.Dispatch<SetStateAction<number>>;
  hoveredCols: number[];
  setHoveredCols: React.Dispatch<SetStateAction<number[]>>;
}

export const GlobalContextProvider = (props: any) => {
  const [started, setStarted] = useState(Date.now());
  const [hoveredCols, setHoveredCols] = useState<number[]>([]);

  const contextValue = {
    started,
    setStarted,
    hoveredCols,
    setHoveredCols
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext<UseGlobalContext>({
  started: Date.now(),
  setStarted: () => {},
  hoveredCols: [],
  setHoveredCols: () => {},
});

export default GlobalContext;