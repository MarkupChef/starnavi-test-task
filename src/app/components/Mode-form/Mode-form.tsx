import React, {FC, SetStateAction} from 'react';
import {Mode} from "../../App";

interface ModeFromProps {
  modes: Mode[] | [];
  curMode: string;
  setCurMode: React.Dispatch<SetStateAction<string>>;
}

const ModeForm:FC<ModeFromProps> = ({modes, curMode, setCurMode}) => {

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCurMode(e.target.value);
  };

  const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
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

export default ModeForm;