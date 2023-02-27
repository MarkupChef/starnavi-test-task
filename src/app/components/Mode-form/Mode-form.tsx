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
  }

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
      <form onSubmit={handleSubmit}>
        <label>
          <select name="" id="mode" onChange={handleSelect}>
            <option value="">Pick the mode</option>
            {modes.length > 0 && modes.map((item, i) => (
                  <option key={`option-${i}`} value={item.field}>{item.name}</option>
                ))
            }
          </select>
        </label>

        <button disabled={!curMode} type={"submit"}>Start</button>
      </form>
    </>
  );
};

export default React.memo(ModeForm);