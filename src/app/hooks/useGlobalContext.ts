import React, { createContext, useContext, SetStateAction } from "react";

interface UseGlobalContext {
  hoveredCols: number[];
  setHoveredCols: React.Dispatch<SetStateAction<number[]>>;
}

export const GlobalContext = createContext<UseGlobalContext>({
  hoveredCols: [],
  setHoveredCols: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);