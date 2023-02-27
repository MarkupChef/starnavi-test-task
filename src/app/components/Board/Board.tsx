import React, { FC } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";

interface BoardProps {
  mode: string;
}

const Board:FC<BoardProps> = ({mode}) => {
  const { hoveredCols } = useGlobalContext();

  return (
    <div>
      <h2>Hovered squares:</h2>

      { hoveredCols.length > 0 ?
        <ul style={{maxWidth: '200px', maxHeight: '150px', overflow: 'auto'}}>
          {[...hoveredCols].reverse().map((item) => <li key={`col-${item}`}>
            {`row: ${(Math.trunc(item /  +mode)) + 1} col ${item+1}`}
          </li>)}
        </ul>
        :
        <p>No hovered squares</p>
      }
    </div>
  );
};

export default Board;