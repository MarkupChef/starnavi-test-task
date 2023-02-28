import React, { useEffect, useState } from 'react';
import ModeForm from "./components/Mode-form";
import Grid from "./components/Grid";
import { GlobalContextProvider } from './hooks/useGlobalContext';
import Board from "./components/Board";

export interface Mode {
  name: string;
  field: number;
}

function App() {
  const [startMode, setStartMode] = useState('');

  useEffect(() => {
    document.title = "StarNavi: Test task";
  }, []);

  return (
    <GlobalContextProvider>
      <div className={'flex p-8 min-h-screen'}>
        <div className={'shrink-0 mr-8'}>
          <div className={'min-h-full bg-white rounded-2xl p-8 flex flex-col'}>
            <div className={'mb-6'}>
              <ModeForm setStartMode={setStartMode}/>
            </div>
            <div className={'grow flex flex-col'}>
              {startMode && <Board mode={startMode} />}
            </div>
          </div>
        </div>
        <div className={'grow'}>
          {startMode &&
            <div className={'bg-white rounded-2xl p-8'}>
              <Grid mode={+startMode}/>
            </div>
          }
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
