import React, { FC, useContext } from 'react';
import "./grid.scss";
import Col from "./Col";
import GlobalContext from '../../hooks/useGlobalContext';

interface GridProps {
  mode: number;
}

const Grid:FC<GridProps> = ({mode}) => {
  const cols = Math.pow(mode, 2);
  const {started, setHoveredCols} = useContext(GlobalContext);

  return (
    <div className={'grid'} style={{
      gridTemplateColumns: `repeat(${mode}, minmax(auto, 50px))`,
      gridTemplateRows: `repeat(${mode}, auto)`,
    }}>
      {
        mode && [...Array(cols)].map((item, i) =>
          <Col key={`grid-${i}`} id={i} started={started} setHoveredCols={setHoveredCols}/>
        )
      }
    </div>
  );
};

export default Grid;