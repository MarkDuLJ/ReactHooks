import "./App.css";
import React from "react";

import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <CheckBox />
      <ColorList />
    </div>
  );
}

export default App;
