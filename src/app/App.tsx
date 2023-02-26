import React, {useEffect, useState} from 'react';
import ModeForm from "./components/Mode-form";
import Grid from "./components/Grid";
import { GlobalContext } from "./hooks/useGlobalContext";

export interface Mode {
  name: string;
  field: number;
}

function App() {
  const [modes, setModes] = useState<Mode[] | []>([]);
  const [curMode, setCurMode] = useState<string | ''>('');
  const [hoveredCols, setHoveredCols] = useState<number[]>([]);

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then((respond) => respond.json())
      .then(data => {
        setModes(data);
      });
  }, []);


  return (
    <GlobalContext.Provider value={{hoveredCols, setHoveredCols}}>
      <div>
        <ModeForm modes={modes} curMode={curMode} setCurMode={setCurMode}/>
        <br/>
        <br/>
        <br/>
        {curMode && <Grid mode={curMode}/>}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
