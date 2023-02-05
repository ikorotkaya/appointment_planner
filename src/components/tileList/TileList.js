import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {Object.values(props).map((object, i) => {
        return (
        <li>
          <Tile object={object} key={i} />
        </li>
        )
        })}
    </div>
  );
};
