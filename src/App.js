import "./App.css";
import React, { useState } from "react";
import { v4 } from "uuid";

import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
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

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <AddColorForm
        onNewColor={(title, color) => {
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
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
