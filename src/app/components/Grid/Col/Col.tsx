import React, { FC, useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

interface ColProps {
  id: number;
}

const Col:FC<ColProps> = ({id}) => {
  const [hovered, setHovered] = useState(false);
  const { setHoveredCols } = useGlobalContext();

  const handleOver = () => {

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