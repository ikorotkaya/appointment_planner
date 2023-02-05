import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return (
        <li key={i}>
          <Tile item={item} />
        </li>
        )
        })}
    </div>
  );
};
