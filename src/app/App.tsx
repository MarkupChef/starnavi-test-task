import React, {useEffect, useState} from 'react';
import ModeForm from "./components/Mode-form";

export interface Mode {
  name: string;
  field: number;
}

function App() {
  const [modes, setModes] = useState<Mode[] | []>([]);
  const [curMode, setCurMode] = useState<string | ''>('');

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then((respond) => respond.json())
      .then(data => {
        setModes(data);
      });
  }, []);

  return (
    <div>
      <ModeForm modes={modes} curMode={curMode} setCurMode={setCurMode}/>
    </div>
  );
}

export default App;
