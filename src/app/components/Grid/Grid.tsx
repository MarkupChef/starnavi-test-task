import React, { FC } from "react";
import "./grid.scss";
import Col from "./Col";

interface GridProps {
  mode: number;
}

const Grid:FC<GridProps> = ({mode}) => {
  const cols = Math.pow(mode, 2);

  return (
    <div className={'grid'} style={{
      gridTemplateColumns: `repeat(${mode}, minmax(auto, 50px))`,
      gridTemplateRows: `repeat(${mode}, auto)`,
    }}>
      {
        mode && [...Array(cols)].map((item, i) =>
          <Col key={`grid-${i}`} id={i}/>
        )
      }
    </div>
  );
};

export default React.memo(Grid);