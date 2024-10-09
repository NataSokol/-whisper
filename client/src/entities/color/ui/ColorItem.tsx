import React from "react";
import { Color } from "../model";

type Props = {
  color: Color;
};

export const ColorItem: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <span>{color.title}</span>
    </div>
  );
};

export default ColorItem;
