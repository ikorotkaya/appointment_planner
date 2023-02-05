import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.map((object, i) => {
        <li>
          <Tile object={object} key={i} />
        </li>
      })}
    </div>
  );
};
