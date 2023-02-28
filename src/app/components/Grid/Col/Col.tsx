import React, { FC, SetStateAction, useLayoutEffect, useMemo, useState } from 'react';

interface ColProps {
  started: number;
  id: number;
  setHoveredCols: React.Dispatch<SetStateAction<number[]>>;
}

const Col:FC<ColProps> = ({started, id, setHoveredCols}) => {
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    setHovered(false);
  }, [started]);

  const handleOver = () => {

    if (hovered) {
      setHoveredCols((prevArray) => prevArray.filter(item => item !== id));

    } else {
      setHoveredCols((prevArray) => [...prevArray, id]);
    }

    setHovered(!hovered);
  };

  return useMemo(() => (
    <div onMouseOver={handleOver} className={`gridItem ${hovered ? 'bg-pink-400' : 'bg-white'}`}></div>
  ), [hovered]);
};

export default React.memo(Col);