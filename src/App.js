import "./App.css";
import React, { useState, useCallback } from "react";

import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/CheckBox";
import PureDog from "./components/PureDog";

function App() {
  const [dogs, setDogs] = useState(["shala", "titin", "hooray"]);
  const meow = useCallback(
    (x) => console.log(`${x} said: meow, meow, meow!!!`),
    []
  );
  return (
    <div className="App">
      <AddColorForm />

      {dogs.map((dog, i) => (
        <PureDog key={i} dog={dog} meow={meow} />
      ))}
      <button onClick={() => setDogs([...dogs, prompt("more dogs")])}>
        Add a dog
      </button>
      <CheckBox />
      <ColorList />
    </div>
  );
}

export default App;
