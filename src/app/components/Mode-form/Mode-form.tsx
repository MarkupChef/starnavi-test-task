import React, { FC, SetStateAction, useEffect, useState } from "react";
import {Mode} from "../../App";
import { useGlobalContext } from "../../hooks/useGlobalContext";

interface ModeFromProps {
  setStartMode: React.Dispatch<SetStateAction<string>>;
}

const ModeForm:FC<ModeFromProps> = ({setStartMode}) => {
  const [modes, setModes] = useState<Mode[] | []>([]);
  const [curMode, setCurMode] = useState<string | ''>('');
  const {setStarted, setHoveredCols} = useGlobalContext();

  useEffect(() => {
    fetch('https://demo7919674.mockable.io/')
      .then((respond) => respond.json())
      .then(data => {
        setModes(data);
      });
  }, []);

  const reset = () => {
    setStarted(false);
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
      <form onSubmit={handleSubmit}>
        <div className={'relative w-full mb-3'}>
          <label>
            <select name="" id="mode" onChange={handleSelect} className={'block appearance-none w-full px-4 py-2 pr-8 rounded-2xl bg-gray-100 shadow leading-tight focus:outline-none focus:shadow-outline'}>
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
    </>
  );
};

export default React.memo(ModeForm);