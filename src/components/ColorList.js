import React from "react";
import Color from "./Color";

export default function ColorList({ colors, onRemoveColor, onRateColor }) {
  if (!colors.length) return <p>there's no data</p>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
