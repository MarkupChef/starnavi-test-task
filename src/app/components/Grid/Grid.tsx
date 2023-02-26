import React, { FC, SetStateAction } from "react";
import "./grid.scss";
import Col from "./Col";

interface GridProps {
  mode: string;
}

const Grid:FC<GridProps> = ({mode}) => {

  const cols = Math.pow(+mode, 2);

  return (
    <div className={'grid'} style={{
      gridTemplateColumns: `repeat(${mode}, 50px)`,
      gridTemplateRows: `repeat(${mode}, 50px)`
    }}>
      {
        mode && [...Array(cols)].map((item, i) =>
          <Col key={`grid-${i}`} id={i}/>
        )
      }
    </div>
  );
};

export default Grid;