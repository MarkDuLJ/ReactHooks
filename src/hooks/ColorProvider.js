import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const colorData = [
  {
    id: 1,
    title: "ocean at dusk",
    color: "#00c4e2",
    rating: 5,
  },
  {
    id: 2,
    title: "lawn",
    color: "#26ac56",
    rating: 3,
  },
  {
    id: 3,
    title: "bright red",
    color: "#ff0000",
    rating: 0,
  },
];

const ColorContext = createContext();
export const useColor = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  //instead of using setColors directly, it's better define more readble functions and put setColors insdie
  const [colors, setColors] = useState(colorData);
  const addColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ];

    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
