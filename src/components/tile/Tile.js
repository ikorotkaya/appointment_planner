import React from "react";

export const Tile = (object) => {

  return (
    <div className="tile-container">
      {Object.values(object).map((value, i) => {
        if (i === 0) {
          return <p className="tile-title" key={i}>{value[i]}</p>
        } else {
          return <p className="tile" key={i}>{value[i]}</p>
        }
      })}
    </div>
  );
};
