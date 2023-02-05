import React from "react";

export const Tile = ({ item }) => {

  return (
    <div className="tile-container">
      {Object.values(item).map((value, i) => {
        if (i === 0) {
          return <p className="tile-title" key={i}>{value}</p>
        } else {
          return <p className="tile" key={i}>{value}</p>
        }
      })}
    </div>
  );
};
