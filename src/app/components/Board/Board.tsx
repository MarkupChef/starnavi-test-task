import React, { FC } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";

interface BoardProps {
  mode: string;
}

const Board:FC<BoardProps> = ({mode}) => {
  const { hoveredCols } = useGlobalContext();

  return (
    <div className={'grow flex flex-col h-full'}>
      <div>
        <h3 className={'text-2xl font-semibold mb-3'}>Hovered squares:</h3>
      </div>

      { hoveredCols.length > 0 ?
        <div className={'grow relative overflow-auto'}>
          <ul className={'absolute w-full top-0 left-0 space-y-2 pr-2'}>
            {[...hoveredCols].reverse().map((item) =>
              <li key={`col-${item}`} className={'w-full py-3 text-center rounded-xl bg-pink-100'}>
                {`row: ${(Math.trunc(item /  +mode)) + 1} col: ${item+1}`}
              </li>)}
          </ul>
        </div>
        :
        <p>No hovered squares</p>
      }
    </div>
  );
};

export default Board;