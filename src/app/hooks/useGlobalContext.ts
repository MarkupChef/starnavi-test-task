import React, { createContext, useContext, SetStateAction } from "react";

interface UseGlobalContext {
  started: boolean;
  setStarted: React.Dispatch<SetStateAction<boolean>>;
  hoveredCols: number[];
  setHoveredCols: React.Dispatch<SetStateAction<number[]>>;
}

export const GlobalContext = createContext<UseGlobalContext>({
  started: false,
  setStarted: () => {},
  hoveredCols: [],
  setHoveredCols: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);