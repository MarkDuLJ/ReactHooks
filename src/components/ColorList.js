import React from "react";
import Color from "./Color";
import { useColor } from "../hooks/ColorProvider";

export default function ColorList() {
  const { colors, removeColor, rateColor } = useColor();
  if (!colors.length) return <p>there's no data</p>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={removeColor}
          onRate={rateColor}
        />
      ))}
    </div>
  );
}
