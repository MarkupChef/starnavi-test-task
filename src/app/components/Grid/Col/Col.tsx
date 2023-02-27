import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

interface ColProps {
  id: number;
}

const Col:FC<ColProps> = ({id}) => {
  const [hovered, setHovered] = useState(false);
  const {started, setStarted, setHoveredCols} = useGlobalContext();

  useLayoutEffect(() => {
    if (!started) {
      setHovered(false);
    }
  }, [started]);

  const handleOver = () => {

    if (!started) {
      setStarted(true);
    }

    if (hovered) {
      setHoveredCols((prevArray) => prevArray.filter((item, i) => item !== id));
    } else {
      setHoveredCols((prevArray) => [...prevArray, id]);
    }

    setHovered(!hovered);
  };

  return (
    <div style={{backgroundColor: hovered ? 'blue': 'white'}} onMouseOver={handleOver} className={'gridItem'}>{id}</div>
  );
};

export default Col;