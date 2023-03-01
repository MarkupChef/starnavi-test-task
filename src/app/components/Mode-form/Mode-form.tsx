import React, { FC, SetStateAction, useContext, useEffect, useState } from 'react';
import {Mode} from "../../App";
import GlobalContext from '../../hooks/useGlobalContext';

interface ModeFromProps {
  setStartMode: React.Dispatch<SetStateAction<string>>;
}

const ModeForm:FC<ModeFromProps> = ({setStartMode}) => {
  const [modes, setModes] = useState<Mode[] | []>([]);
  const [curMode, setCurMode] = useState<string | ''>('');
  const [error, setError] = useState<Error | null>(null);
  const {setStarted, setHoveredCols} = useContext(GlobalContext);

  async function getModes():Promise<void> {

    try {
      const response = await fetch('https://demo7919674.mockable.io/');
      const data = await response.json();
      setModes(data);

    } catch (Err) {
      setError(Err as Error);
    }
  }

  useEffect(() => {
    getModes();
  }, []);

  const reset = () => {
    setStarted(Date.now());
    setHoveredCols([]);
  };

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCurMode(e.target.value);
  };

  const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    reset();

    if (curMode) {
      setStartMode(curMode);
    }
  };

  return (
    <>
      <h2 className={'text-3xl font-semibold mb-3'}>Choose the mode</h2>

      {error ? (
        <p className={'text-red-400'}>{error.message}</p>
      ) : modes.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className={'relative w-full mb-3'}>
            <label>
              <select id="mode" onChange={handleSelect} className={'block appearance-none w-full px-4 py-2 pr-8 rounded-2xl bg-gray-100 shadow leading-tight focus:outline-none focus:shadow-outline'}>
                <option value="">Pick the mode</option>
                {modes.length > 0 && modes.map((item, i) => (
                  <option key={`option-${i}`} value={item.field}>{item.name}</option>
                ))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </label>
          </div>
          <button disabled={!curMode} type={"submit"} className={'w-full py-2 p-5 rounded-3xl text-xl text-white uppercase tracking-widest font-bold bg-pink-400 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-pink-600 transition-colors'}>Start</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ModeForm;