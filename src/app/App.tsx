import React, {useState} from 'react';
import ModeForm from "./components/Mode-form";
import Grid from "./components/Grid";
import { GlobalContext } from "./hooks/useGlobalContext";
import Board from "./components/Board";

export interface Mode {
  name: string;
  field: number;
}

function App() {
  const [startMode, setStartMode] = useState('');
  const [started, setStarted] = useState(false);
  const [hoveredCols, setHoveredCols] = useState<number[]>([]);

  return (
    <>
    <GlobalContext.Provider value={{started, setStarted, hoveredCols, setHoveredCols}}>
      <div>
        <ModeForm setStartMode={setStartMode}/>
        <br/>
        <br/>
        <br/>
        <br/>
        {startMode && <Grid mode={startMode}/>}
        {startMode && <Board mode={startMode}/>}
      </div>
    </GlobalContext.Provider>
    </>
  );
}

export default App;
