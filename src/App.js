import "./App.css";
import React, { useState, useCallback } from "react";
import faker from "faker";

import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/CheckBox";
import PureDog from "./components/PureDog";
import List from "./components/List";

const bigData = [...Array(1000)].map(() => ({
  title: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.image.image(),
}));

function App() {
  const [dogs, setDogs] = useState(["shala", "titin", "hooray"]);
  const meow = useCallback(
    (x) => console.log(`${x} said: meow, meow, meow!!!`),
    []
  );

  const renderItem = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.title} width="150" />
      <p>
        {item.title} - {item.email}
      </p>
    </div>
  );

  return (
    <div className="App">
      <List data={bigData} renderItem={renderItem} />
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
